import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  col = "col-md-10";
  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerCompetences(){
    return this.http.get(this.url+'admin/competences');
  }

  ajouterCompetence(competenceData:any){
    return this.http.post(this.url+'admin/competences', competenceData);
  }
}
