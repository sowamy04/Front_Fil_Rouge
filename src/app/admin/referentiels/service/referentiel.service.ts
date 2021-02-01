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
}
