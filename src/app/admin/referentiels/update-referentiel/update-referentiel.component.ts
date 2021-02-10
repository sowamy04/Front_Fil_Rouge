import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferentielService } from './../service/referentiel.service';
import { Location } from '@angular/common';
import { GroupeCompetenceService } from './../../groupe-competences/service/groupe-competence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-referentiel',
  templateUrl: './update-referentiel.component.html',
  styleUrls: ['./update-referentiel.component.css']
})
export class UpdateReferentielComponent implements OnInit {

  id:any
  data : any
  groupeCompetences :  any
  constructor( private groupeCompService : GroupeCompetenceService, private location : Location, private refService : ReferentielService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getReferentiel()
    this.groupeCompService.listerGroupeCompetences().subscribe(
      (reponse : any)=> {
        this.groupeCompetences = reponse;
        console.log(reponse);
      },
      error=>console.log(error.error.message)
    )
  }

  getReferentiel(){
    this.refService.detailReferentiel(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

  onReferentielUpdate(referentielUpdateForm : any){
    console.log(referentielUpdateForm.value.prenom)
    var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
    var programmeFile = new Blob([content], { type: "text/xml"})
    const grpeComps = referentielUpdateForm.value.groupeCompetence;
          for (let index = 0; index < grpeComps.length; index++) {
            grpeComps[index]= parseInt(grpeComps[index])
          }
           var grpeCompete = grpeComps
    const formData  = new FormData()
    formData.append("libelle", referentielUpdateForm.value.libelle)
    formData.append("programme", programmeFile, referentielUpdateForm.value.programme)
    formData.append("presentation", referentielUpdateForm.value.presentation)
    formData.append("critereEvaluation", referentielUpdateForm.value.critereEvaluation)
    formData.append("critereAdmission", referentielUpdateForm.value.critereAdmission)
    for (let index = 0; index < grpeCompete.length; index++) {
      formData.append("groupeCompetence[]", grpeCompete[index])
    }
    formData.append("action", referentielUpdateForm.value.action)
    console.log(formData)
    if(referentielUpdateForm.value){
        this.refService.updateReferentiel(this.id, formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Référentiel modifié avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            this.location.back()
          },
          error=> console.log(error)
        )
      }
  }

  retour(){
    this.location.back()
  }

}
