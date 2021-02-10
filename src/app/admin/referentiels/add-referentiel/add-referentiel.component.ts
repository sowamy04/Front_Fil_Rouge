import { ReferentielService } from './../service/referentiel.service';
import Swal from 'sweetalert2';
import { GroupeCompetenceService } from './../../groupe-competences/service/groupe-competence.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  referentielForm : NgForm |any
  groupeCompetences : any;
  constructor( private location:  Location, private groupeCompService : GroupeCompetenceService, private refService : ReferentielService) { }

  ngOnInit(): void {
    this.groupeCompService.listerGroupeCompetences().subscribe(
      (reponse : any)=> {
        this.groupeCompetences = reponse;
        console.log(reponse);
      },
      error=>console.log(error.error.message)
    )
  }

  onSubmit(referentielForm:any){
    console.log(referentielForm.value.prenom)
    var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
    var programmeFile = new Blob([content], { type: "text/xml"})
    const grpeComps = referentielForm.value.groupeCompetence;
          for (let index = 0; index < grpeComps.length; index++) {
            grpeComps[index]= parseInt(grpeComps[index])
          }
           var grpeCompete = grpeComps
    const formData  = new FormData()
    formData.append("libelle", referentielForm.value.libelle)
    formData.append("programme", programmeFile, referentielForm.value.programme)
    formData.append("presentation", referentielForm.value.presentation)
    formData.append("critereEvaluation", referentielForm.value.critereEvaluation)
    formData.append("critereAdmission", referentielForm.value.critereAdmission)
    for (let index = 0; index < grpeCompete.length; index++) {
      formData.append("groupeCompetence[]", grpeCompete[index])
    }
    console.log(formData)
    if(referentielForm.value){
        this.refService.addReferentiel(formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Référentiel ajouté avec succès',
              showConfirmButton: false,
              timer: 1500
            })

          },
          error=> console.log(error)
        )
      }
  }

  retour(){
    this.location.back()
  }

}
