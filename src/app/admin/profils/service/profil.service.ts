import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerProfils(){
    return this.http.get(this.url+'admin/profils?isExisting=1');
  }

  listerUtilisateursProfil( id : number){
    return this.http.get(this.url+'admin/profils/'+id+'/users');
  }
}

