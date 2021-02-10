import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from './service/profil-sortie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-sorties',
  templateUrl: './profil-sorties.component.html',
  styleUrls: ['./profil-sorties.component.css']
})
export class ProfilSortiesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle', 'details', 'supprimer']
  profilSortiesData : any
  constructor(public profilSorties: ProfilSortieService) { }

  ngOnInit(): void {
    this.showProfilSorties()
  }

  showProfilSorties(){
    this.profilSorties.listerProfilSorties().subscribe(
      (result:any)=>{
        console.log(result)
        this.profilSortiesData = result
        console.log(result);
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  detail(){
    this.profilSorties.col ="col-md-6";
  }

  supprimer(profilSortiData : any){
    console.log(profilSortiData)
    Swal.fire({
      title: 'veut-tu vraiment supprimer ce profil de sortie?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.profilSorties.deleteProfilSortie(profilSortiData.id).subscribe(
          (result : any)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Profil de sortie supprimé avec succès',
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
