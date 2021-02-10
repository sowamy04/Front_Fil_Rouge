import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerGroupeCompetences(){
    return this.http.get(this.url+'admin/grpecompetences');
  }

  ajouterGroupeCompetence(groupeCompetenceData : any){
    return this.http.post(this.url+'admin/grpecompetences', groupeCompetenceData);
  }

  detailGroupeCompetence( id : number){
    return this.http.get(this.url+'admin/grpecompetences/'+id);
  }

  updateGroupeCompetence(id : number, groupeCompetenceData : any){
    return this.http.put(this.url+'admin/grpecompetences/'+id, groupeCompetenceData)
  }
}
