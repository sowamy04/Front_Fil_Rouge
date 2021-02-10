import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerReferentiels(){
    return this.http.get(this.url+'admin/referentiels/grpecompetences');
  }

  addReferentiel( referentielData : any){
    return this.http.post(this.url+'admin/referentiels', referentielData);
  }

  detailReferentiel( id : number){
    return this.http.get(this.url+'admin/referentiels/'+id);
  }

  updateReferentiel(id : number, referentielData : any){
    return this.http.post(this.url+'admin/referentiels/'+id+'?_method=PUT', referentielData)
  }
}
