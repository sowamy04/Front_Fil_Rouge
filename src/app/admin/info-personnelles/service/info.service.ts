import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  mesInfos( id : number){
    return this.http.get(this.url+'admin/users/'+id);
  }

  UpdateInfo( id : number, data: any){
    return this.http.post(this.url+'admin/users/'+id+'_method=PUT', data);
  }
}
