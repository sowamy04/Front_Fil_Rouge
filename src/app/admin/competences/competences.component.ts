import { CompetenceService } from './service/competence.service';
import { Component, OnInit } from '@angular/core';

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

}
