import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss'],
})
export class NewMemberComponent {
  member = { name: '', surname: '', phone: '', email: '' };
  fileToUpload!: File;

  constructor(private api: ApiService, private appComponent: AppComponent) {}

  save() {
    const formData = new FormData();
    formData.append('name', this.member.name);
    formData.append('surname', this.member.surname);
    formData.append('phone', this.member.phone);
    formData.append('email', this.member.email);
    if (this.fileToUpload) {
      formData.append('photo', this.fileToUpload, this.fileToUpload.name);
    }

    this.api.saveNewMember(formData).subscribe(
      (data) => {
        this.appComponent.members.push(data);
      },
      (error) => {
        console.log('Aconteceu um erro no Save');
      }
    );
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }
}
