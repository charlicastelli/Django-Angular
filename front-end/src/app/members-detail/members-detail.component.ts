import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss'],
})
export class MembersDetailComponent implements OnInit {
  selected_member = {
    id: '',
    name: '',
    surname: '',
    phone: '',
    photo: '',
    email: '',
  };
  selected_id!: number;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    /*
    Observable vai monitorar e para cada click que eu fizer
    ele vai capturar o id passado na url e vai carregar a função loadMember,
    assim atualizando a tela.
    */
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id: number = Number(param.get('id'));
      this.selected_id = id;
      this.loadMember(id!);
    });
  }

  loadMember(id: number) {
    //capturar o id enviado na rota 'member-detail/:id'
    this.api.getMember(id).subscribe(
      (data) => {
        this.selected_member = data;
      },
      (error) => {
        console.log('Aconteceu um erro no loadmember');
      }
    );
  }

  update() {
    this.api.updateMember(this.selected_member).subscribe(
      (data) => {
        this.selected_member = data;
      },
      (error) => {
        console.log('Aconteceu um erro no updateMember');
      }
    );
  }

  newMember() {
    this.router.navigate(['new-member']);
  }

  deleteMember() {
    this.api.removeMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e, i) =>{
          if (e.id == this.selected_id) {
            index = i;
          }
        });
        this.appComponent.members.splice(Number(index), 1);
        this.router.navigate(['new-member']);
      },
      (error) => {
        console.log('Aconteceu um erro no updateMember');
      }
    );
  }
}
