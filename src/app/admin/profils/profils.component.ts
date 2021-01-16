import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfilService } from './service/profil.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle', 'action']
  profilsData : any
  constructor( private route:Router, public profilService:ProfilService) { }

  ngOnInit(): void {
    this.showProfils()
  }

  showProfils(){
    this.profilService.listerProfils().subscribe(
      (result:any)=>{
        console.log(result)
        this.profilsData = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  showUsersProfil(){
    this.profilService.listerProfils().subscribe(
      (response : any)=> {
        console.log(response);
          this.profilService.listerUtilisateursProfil(response[0]['id']).subscribe(
            (data : any)=>{
              console.log(data)
            },
            error=> console.log(error)
          )

      }
    )



  }


  details(){
    this.route.navigateByUrl('users-profil')
  }

  supprimer(){
    Swal.fire({
      title: 'veut-tu vraiment supprimer ce profil?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Supprimé avec succès!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Suppression annulée', '', 'info')
      }
    })
  }

}
