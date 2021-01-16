import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerationTokenService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };

  getToken(credentials:any){
    return  this.http.post(this.url+'login_check', credentials, this.httpOption);
  }

  RecuperationToken(){
    return localStorage.getItem('token');
  }

  logout(){
    return localStorage.removeItem('token');
  }

}
