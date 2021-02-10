import { Router, ActivatedRoute } from '@angular/router';
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
  id : any
  data:any
  dat: any
  constructor( private route:Router, public profilService:ProfilService, private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfil()
    this.showProfils()
  }

  getProfil(){
    this.profilService.getProfil(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.dat = response
      },
      error=> console.log(error)
    )
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

  /* getProfilData(){
    this.profilService.getProfil(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  } */

  details(){
    this.route.navigateByUrl('users-profil')
  }

  supprimer(profilData : any){
    /* this.id = this.routeActivated.snapshot.params['id'];
    profilData =  this.getProfil() */
    console.log(profilData)
    Swal.fire({
      title: 'veut-tu vraiment supprimer ce profil?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.profilService.deleteProfil(profilData.id).subscribe(
          (result : any)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Profil supprimé avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(result)
          },
          error=>console.log(error)
        )
      } else if (result.isDenied) {
        Swal.fire('Suppression annulée', '', 'info')
      }
    })
  }

}
