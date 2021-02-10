import { ApprenantService } from './../admin/apprenants/service/apprenant.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GenerationTokenService } from './../services/generation-token.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {

  tokenData : any
  id : any
  data : any
  helper = new JwtHelperService()
  constructor( private auth:GenerationTokenService, private route:Router , private location:Location, private infoService : ApprenantService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.tokenData = this.auth.RecuperationToken()
    console.log(this.tokenData)
    const decodedToken = this.helper.decodeToken( this.tokenData);
    console.log(decodedToken)
    this.id = decodedToken.id
    console.log(this.id)
    this.infoService.detailApprenant(this.id).subscribe(
      (result : any)=>{
        this.data = result
        console.log(result)
      },
      error=> console.log(error)
    )
  }

  deconnexion(){
    Swal.fire({
      title: 'Voulez-vous vraiment quitter?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const val = this.auth.logout()
        this.route.navigateByUrl('connexion')
      } else if (result.isDenied) {
        this.location.back()
      }
    })
  }

}
