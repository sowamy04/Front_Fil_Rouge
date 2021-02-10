import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfilSortieService } from './../service/profil-sortie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-apprenants',
  templateUrl: './liste-apprenants.component.html',
  styleUrls: ['./liste-apprenants.component.css']
})
export class ListeApprenantsComponent implements OnInit {

  data : any
  id:any
  constructor( private profilSortieService : ProfilSortieService , private route : ActivatedRoute , private location : Location ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getUsersProfilSorties()
  }

  getUsersProfilSorties(){
    this.profilSortieService.listerUtilisateursProfilSorties(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

  cacher(){
    this.location.back()
    this.profilSortieService.col="col-md-10"
  }

}
