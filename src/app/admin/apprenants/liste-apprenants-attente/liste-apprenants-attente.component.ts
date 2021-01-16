import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { ApprenantService } from '../service/apprenant.service';

@Component({
  selector: 'app-liste-apprenants-attente',
  templateUrl: './liste-apprenants-attente.component.html',
  styleUrls: ['./liste-apprenants-attente.component.css']
})
export class ListeApprenantsAttenteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'telephone', 'email'];
  datasource : any
  constructor( private location :Location, private apprenantService : ApprenantService) { }

  ngOnInit(): void {
    this.showApprenantsAttente()
  }

  showApprenantsAttente(){
    this.apprenantService.listerApprenant().subscribe(
      (result:any)=>{
        console.log(result)
        this.datasource = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  cacherTab(){
    this.location.back()
  }

  relance(){
    Swal.fire("invitation renvoyé avec succès!")
  }

}
