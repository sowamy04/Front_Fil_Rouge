import { ActivatedRoute } from '@angular/router';
import { ProfilService } from './../service/profil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-utilisateurs-profil',
  templateUrl: './liste-utilisateurs-profil.component.html',
  styleUrls: ['./liste-utilisateurs-profil.component.css']
})
export class ListeUtilisateursProfilComponent implements OnInit {

  data : any
  id:any
  constructor( private profilService : ProfilService , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getUsersProfil()
  }

  getUsersProfil(){
    this.profilService.listerUtilisateursProfil(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

}
