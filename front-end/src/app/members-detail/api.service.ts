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
  getMember(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'members/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  updateMember(member: any, fileToUpload: File | null): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('name', member.name);
    formData.append('surname', member.surname);
    formData.append('phone', member.phone);
    formData.append('email', member.email);
    if (fileToUpload) {
      formData.append('photo', fileToUpload, fileToUpload.name);
    }
    return this.httpClient.put(
      this.baseUrl + 'members/' + member.id + '/',
      formData
    );
  }

  removeMember(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'members/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  //listar todos os membros
  getAllMembers(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'members/', {
      headers: this.httpHeaders,
    });
  }
}
