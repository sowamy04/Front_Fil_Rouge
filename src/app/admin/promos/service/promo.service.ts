import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }

  listerPromos(){
    return this.http.get(this.url+'admin/promo');
  }
}
