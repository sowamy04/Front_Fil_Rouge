import { InfoService } from './info-personnelles/service/info.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { GenerationTokenService } from '../services/generation-token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data : any
  tokenData : any
  id : any
  helper = new JwtHelperService()
  constructor(private route:Router, private location:Location, private auth:GenerationTokenService, private infoService : InfoService) { }

  ngOnInit(): void {
    this.getInfo()
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

  logout(){

  }
}
