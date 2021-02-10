import { PromoService } from './../service/promo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReferentielService } from './../../referentiels/service/referentiel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-promo',
  templateUrl: './update-promo.component.html',
  styleUrls: ['./update-promo.component.css']
})
export class UpdatePromoComponent implements OnInit {

  referentiels : any
  data : any
  id:any
  constructor( private referentielService : ReferentielService, private promoService : PromoService ,private location: Location, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getDetailApprenant()
    this.referentielService.listerReferentiels().subscribe(
      (reponse : any)=> {
        this.referentiels = reponse;
        console.log(reponse);
      },
      error=>console.log(error.error.message)
    )
  }

  getDetailApprenant(){
    this.promoService.detailPromo(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

  onUpdate(promoUpdateForm : any){

  }

  retour(){
    this.location.back()
  }

}
