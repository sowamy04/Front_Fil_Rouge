import Swal from 'sweetalert2';
import { CompetenceService } from './../service/competence.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  competenceForm : NgForm | any ;
  data : any
  constructor( private location : Location, public competenceService : CompetenceService ) { }

  ngOnInit(): void {

  }

  onSubmit(competenceForm:any){
      const competence = competenceForm.value
      this.data = {
        'libelle':competenceForm.value.libelle,
        'niveau':[
            {
                'libelle' : competenceForm.value.libelleNiv1,
                'critereEvaluation' : competenceForm.value.ce1,
                'groupeAction' : competenceForm.value.ga1
            },
            {
                'libelle' : competenceForm.value.libelleNiv2,
                'critereEvaluation' : competenceForm.value.ce2,
                'groupeAction' : competenceForm.value.ga2
            },
            {
                'libelle' : competenceForm.value.libelleNiv3,
                'critereEvaluation' : competenceForm.value.ce3,
                'groupeAction' : competenceForm.value.ga3
            }
        ]
    }
    console.log(this.data)
    this.competenceService.ajouterCompetence(this.data).subscribe(
      (reponse:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Compétence ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(reponse)
      },
      (error:any)=> console.log(error.error.message)
    )
      console.log(competence)
  }

  cacher(){
    this.location.back()
  }

  retour(){
    this.location.back()
    this.competenceService.col="col-md-10"
  }


}
