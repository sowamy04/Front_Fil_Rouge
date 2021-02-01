import { GroupeCompetenceService } from './../service/groupe-competence.service';
import Swal from 'sweetalert2';
import { CompetenceService } from './../../competences/service/competence.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {

  grpeCompetenceForm : NgForm | any;
  competences : any;
  data : any;
  compet:any=[];
  constructor( private location : Location, private competenceService : CompetenceService, private gpreCompService : GroupeCompetenceService) { }

  ngOnInit(): void {
   this.competenceService.listerCompetences().subscribe(
     (reponse : any)=> {
       this.competences = reponse;
       console.log(reponse);
     },
     error=>console.log(error.error.message)
   )
  }

  onSubmit(grpeCompetenceForm: any){
      const groupeCompetence = grpeCompetenceForm.value
      const comps = grpeCompetenceForm.value.competence;
          for (let index = 0; index < comps.length; index++) {
            comps[index]= parseInt(comps[index])

          }
           var compete = comps


      console.log(comps)
     console.log(groupeCompetence);
      this.data = {
        "libelle":grpeCompetenceForm.value.libelle,
        "description":grpeCompetenceForm.value.description,
        "competence":compete
    }
    console.log(compete)
    console.log(this.data)
    this.gpreCompService.ajouterGroupeCompetence(this.data).subscribe(
      (reponse:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Groupe de compétence ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(reponse)
      },
      (error:any)=> console.log(error.error.message)
    )
  }

  cacher(){
    this.location.back()
  }

}
