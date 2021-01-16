import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl
  colDiv = "col-md-12"
  isOpen = false
  constructor(private http:HttpClient) { }
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };

  listerUtilisateur(){
    return this.http.get(this.url+'admin/users', this.httpOption);
  }

  addAdmin(dataUser : any){
    return this.http.post(this.url+'admin/users', dataUser)
  }

  addFormateur(dataUser : any){
    return this.http.post(this.url+'formateurs', dataUser)
  }

  addCm(dataUser : any){
    return this.http.post(this.url+'cms', dataUser)
  }
}
