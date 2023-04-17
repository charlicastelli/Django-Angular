import { TestBed } from '@angular/core/testing';
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
  fileToUpload!: File | null;

  constructor(private api: ApiService, private appComponent: AppComponent) {}

  save() {
    const formData = new FormData();
    formData.append('name', this.member.name);
    formData.append('surname', this.member.surname);
    formData.append('phone', this.member.phone);
    formData.append('email', this.member.email);
    if (this.fileToUpload) {
      formData.append('photo', this.fileToUpload, this.fileToUpload.name);
      console.log('inserindo foto');
    }

    this.api.saveNewMember(formData).subscribe(
      (data) => {
        this.appComponent.members.push(data);
        this.resetMember();
      },
      (error) => {
      }
    );
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }

  resetMember() {
    this.member = { name: '', surname: '', phone: '', email: '' };
    this.fileToUpload = null;
  }
}
