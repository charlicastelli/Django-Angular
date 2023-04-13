import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Na tela home, quando clicar em um membro, envia o id para ca e abre tela exibindo os detalhes do membro
  // Buscar membro pelo id, mostrando todos os detalhes do membro buscado
  getMember(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'members/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  updateMember(member: any): Observable<any> {
    let body = {name: member.name, surname: member.surname, phone: member.phone, email: member.email};
    return this.httpClient.put(this.baseUrl + 'members/' + member.id + '/', body, 
    {
      headers: this.httpHeaders,
    });
  }
}
