import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss'],
})
export class NewMemberComponent {
  member = { name: '', surname: '', phone: '', email: '', photo: '' };
  

  constructor(private api: ApiService, private appComponent: AppComponent) {}

  save() {
    this.api.saveNewMember(this.member).subscribe(
      (data) => {
        this.appComponent.members.push(data);
      },
      (error) => {
        console.log('Aconteceu um erro no Save');
      }
    );
  }

  // onImageChanged(event: any) {
  //   this.member.photo = event.target.files[0];
  //   console.log(this.member.photo);
  // }

}
