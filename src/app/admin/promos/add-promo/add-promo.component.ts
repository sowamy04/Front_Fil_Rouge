import Swal from 'sweetalert2';
import { PromoService } from './../service/promo.service';
import { ReferentielService } from './../../referentiels/service/referentiel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css']
})
export class AddPromoComponent implements OnInit {

  promoForm: NgForm | any;
  referentiels : any;
  data: any
  constructor( private location:Location, private referentielService : ReferentielService, private promoService : PromoService) { }

  ngOnInit(): void {
    this.referentielService.listerReferentiels().subscribe(
      (reponse : any)=> {
        this.referentiels = reponse;
        console.log(reponse);
      },
      error=>console.log(error.error.message)
    )
  }

  onSubmit(promoForm : any){
    const promo = promoForm.value
    console.log(promo)

      const refs = promoForm.value.ref;
          for (let index = 0; index < refs.length; index++) {
            refs[index]= parseInt(refs[index])

          }
           var compete = refs


      console.log(refs)
     console.log(promo);
      this.data = {
        "libelle": promoForm.value.libelle,
        "langue":promoForm.value.langue,
        "description": promoForm.value.description,
        "lieu":promoForm.value.lieu,
        "referentAgate":promoForm.value.agate,
        "fabrique":promoForm.value.fabrique,
        "dateDebut":promoForm.value.dateDebut,
        "dateFin":promoForm.value.dateFin,
        "ref":compete
    }
    console.log(compete)
    console.log(this.data)
    this.promoService.ajouterPromo(this.data).subscribe(
      (reponse:any)=>{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Promo ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(reponse)
      },
      (error:any)=> console.log(error.error.message)
    )
  }

  retour(){
    this.location.back()
  }

}
