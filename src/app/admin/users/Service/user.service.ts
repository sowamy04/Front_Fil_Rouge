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

  addUser(dataUser : any){
    return this.http.post(this.url+'admin/users', dataUser)
  }

  detailUser( id : number){
    return this.http.get(this.url+'admin/users/'+id);
  }

  updateUser(id : number, dataUser : any){
    return this.http.post(this.url+'admin/users/'+id+'?_method=PUT', dataUser)
  }

  deleteUser(id : number){
    return this.http.delete(this.url+'admin/users/'+id)
  }
}
