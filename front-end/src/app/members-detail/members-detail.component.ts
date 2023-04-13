import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss'],
})
export class MembersDetailComponent implements OnInit {
  selected_member = { id: '', name: '', surname: '', phone: '', photo: '', email: '' };
  selected_id: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    /*
    Observable vai monitorar e para cada click que eu fizer
    ele vai capturar o id passado na url e vai carregar a função loadMember,
    assim atualizando a tela.
    */
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.selected_id = id;
      this.loadMember(id!);
    });
  }

  loadMember(id: string) {
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
}
