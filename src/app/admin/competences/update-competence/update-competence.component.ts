import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { CompetenceService } from './../service/competence.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-competence',
  templateUrl: './update-competence.component.html',
  styleUrls: ['./update-competence.component.css']
})
export class UpdateCompetenceComponent implements OnInit {

  data : any
  id:any
  constructor( private route: ActivatedRoute, private competenceService : CompetenceService, private location : Location ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getInfoCompetence()
  }

  getInfoCompetence(){
    this.competenceService.detailCompetence(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

  onUpdate(updateForm : any) {
    const competence = updateForm.value
      this.data = {
        'libelle':updateForm.value.libelle,
        'niveau':[
            {
                'libelle' : updateForm.value.libelleNiv1,
                'critereEvaluation' : updateForm.value.ce1,
                'groupeAction' : updateForm.value.ga1
            },
            {
                'libelle' : updateForm.value.libelleNiv2,
                'critereEvaluation' : updateForm.value.ce2,
                'groupeAction' : updateForm.value.ga2
            },
            {
                'libelle' : updateForm.value.libelleNiv3,
                'critereEvaluation' : updateForm.value.ce3,
                'groupeAction' : updateForm.value.ga3
            }
        ]
    }
    console.log(this.data)
    this.competenceService.updateCompetence(this.id ,this.data).subscribe(
      (reponse:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Compétence modifié avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        this.location.back()
        console.log(reponse)
      },
      (error:any)=> console.log(error.error.message)
    )
      console.log(competence)
  }

  cacher(){
    this.location.back()
    this.competenceService.col = "col-md-10"
  }

}
