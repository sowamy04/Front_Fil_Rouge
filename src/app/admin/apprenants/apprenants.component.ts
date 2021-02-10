import { Component, OnInit } from '@angular/core';
import { ApprenantService } from './service/apprenant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'telephone', 'email', 'actions'];
  datasource : any
  constructor( private apprenantService: ApprenantService) { }

  ngOnInit(): void {
    this.showApprenants()
  }

  showApprenants(){
    this.apprenantService.listerApprenant().subscribe(
      (result:any)=>{
        console.log(result)
        this.datasource = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  supprimer(ApprenantData : any){
    Swal.fire({
      title: 'veut-tu vraiment supprimer cet apprenant?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.apprenantService.deleteApprenant(ApprenantData.id).subscribe(
          (result : any)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Apprenant supprimé avec succès',
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
