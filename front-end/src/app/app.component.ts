import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  members = [
    {
      name: 'member 01',
      id: 1,
      surname: 'fulano',
      photo: 'http://www.minhaapp.com/photo1',
    },
    {
      name: 'member 02',
      id: 2,
      surname: 'ciclano',
      photo: 'http://www.minhaapp.com/photo2',
    },
    {
      name: 'member 03',
      id: 3,
      surname: 'beltrano',
      photo: 'http://www.minhaapp.com/photo3',
    },
  ];

  constructor(
    private api: ApiService,
    private router: Router
    ) {
    this.getMembers();
  }

  getMembers() {
    this.api.getAllMembers().subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.log('Aconteceu um erro');
      }
    );
  };

  memberClicked(member: any) {
    this.router.navigate(['member-detail', member.id]);
  }
}
