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

  ajouterPromo(promoData : any){
    return this.http.post(this.url+'admin/promo', promoData);
  }

  detailPromo( id : number){
    return this.http.get(this.url+'admin/promo/'+id);
  }

  updatePromo(id : number, promoData : any){
    return this.http.post(this.url+'admin/promo/'+id, promoData)
  }
}
