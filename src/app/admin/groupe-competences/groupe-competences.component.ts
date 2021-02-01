import { Component, OnInit } from '@angular/core';
import { GroupeCompetenceService } from './service/groupe-competence.service';

@Component({
  selector: 'app-groupe-competences',
  templateUrl: './groupe-competences.component.html',
  styleUrls: ['./groupe-competences.component.css']
})
export class GroupeCompetencesComponent implements OnInit {

  groupeCompetencesData : any
  jQuery: any;
  name = 'Angular';
  constructor(private groupeCompService : GroupeCompetenceService) { }

  ngOnInit(): void {
    this.showGroupeompetences();
  }

  showGroupeompetences(){
    this.groupeCompService.listerGroupeCompetences().subscribe(
      (result:any)=>{
        console.log(result)
        this.groupeCompetencesData = result
        console.log(result);
      },
      (error:any)=>console.log(error.error.message)
    )
  }

}
