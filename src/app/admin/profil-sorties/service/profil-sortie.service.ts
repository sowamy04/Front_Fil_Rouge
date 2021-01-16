import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerProfilSorties(){
    return this.http.get(this.url+'admin/profilsorties');
  }
}
