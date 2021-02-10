import { CompetenceService } from './service/competence.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {


  competenceData : any;
  niveauxData : any;
  constructor(public competenceService : CompetenceService) { }

  ngOnInit(): void {
    this.showCompetences()
  }

  showCompetences(){
    this.competenceService.listerCompetences().subscribe(
      (result:any)=>{
        console.log(result)
        this.competenceData = result
        this.niveauxData = result.niveaux
        console.log(result);
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  isclicked(){
    this.competenceService.col = "col-md-7";
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
        this.competenceService.deleteCompetence(profilSortiData.id).subscribe(
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
