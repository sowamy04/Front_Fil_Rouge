import { InfoService } from './../admin/info-personnelles/service/info.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GenerationTokenService } from './../services/generation-token.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  tokenData : any
  id : any
  data : any
  helper = new JwtHelperService()
  constructor( private auth:GenerationTokenService, private route:Router , private location:Location, private infoService : InfoService) { }

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
    this.infoService.mesInfos(this.id).subscribe(
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
