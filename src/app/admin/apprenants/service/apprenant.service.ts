import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  url = environment.apiUrl
  httpOption = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };

  constructor(private http:HttpClient) { }

  listerApprenant(){
    return this.http.get(this.url+'apprenants');
  }

  addApprenant(dataApp:any){
    return this.http.post(this.url+'apprenants', dataApp)
  }

}
