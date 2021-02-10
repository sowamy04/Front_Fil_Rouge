import Swal from 'sweetalert2';
import { GroupeCompetenceService } from './../service/groupe-competence.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompetenceService } from './../../competences/service/competence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-groupe-competence',
  templateUrl: './update-groupe-competence.component.html',
  styleUrls: ['./update-groupe-competence.component.css']
})
export class UpdateGroupeCompetenceComponent implements OnInit {

  id:any
  data : any
  competences: any
  constructor( private competenceService : CompetenceService, private groupeCompService : GroupeCompetenceService ,private location : Location, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getGroupeCompetence()
    this.competenceService.listerCompetences().subscribe(
      (reponse : any)=> {
        this.competences = reponse;
        console.log(reponse);
      },
      error=>console.log(error.error.message)
    )
  }

  getGroupeCompetence(){
    this.groupeCompService.detailGroupeCompetence(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      (error : any)=> console.log(error)
    )
  }

  onUpdate(grpeCompetenceUpdateForm : any){
    const groupeCompetence = grpeCompetenceUpdateForm.value
      const comps = grpeCompetenceUpdateForm.value.competence;
          for (let index = 0; index < comps.length; index++) {
            comps[index]= parseInt(comps[index])

          }
           var compete = comps


      console.log(comps)
     console.log(groupeCompetence);
      this.data = {
        "libelle":grpeCompetenceUpdateForm.value.libelle,
        "description":grpeCompetenceUpdateForm.value.description,
        "competence":compete,
        "action":grpeCompetenceUpdateForm.value.action
    }
    console.log(compete)
    console.log(this.data)
    this.groupeCompService.updateGroupeCompetence(this.id, this.data).subscribe(
      (reponse:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Groupe de compétence modifié avec succès',
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
