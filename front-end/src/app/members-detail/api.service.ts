import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  //Buscar membro pelo id, mostrando todos os detalhes do membro buscado
  getMember(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'members/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
}
