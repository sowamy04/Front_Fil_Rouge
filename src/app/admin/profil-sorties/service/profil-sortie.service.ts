import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  col ="col-md-10";
  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerProfilSorties(){
    return this.http.get(this.url+'admin/profilsorties');
  }

  updateProfilSorties(id : number, dataUser : any){
    return this.http.post(this.url+'admin/profilsorties/'+id, dataUser)
  }

  listerUtilisateursProfilSorties( id : number){
    return this.http.get(this.url+'admin/profilsorties/'+id);
  }

  deleteProfilSortie(id : number){
    return this.http.delete(this.url+'admin/profilsorties/'+id);
  }
}
