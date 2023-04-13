import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss']
})
export class MembersDetailComponent implements OnInit{

  selected_member = {name: '', surname: ''}

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    //capturar o id enviado na rota 'member-detail/:id'
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getMember(id!).subscribe(
      (data) => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log('Aconteceu um erro no loadmember');
      }
    );
  }
}
