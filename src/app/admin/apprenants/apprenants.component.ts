import { Component, OnInit } from '@angular/core';
import { ApprenantService } from './service/apprenant.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'telephone', 'email', 'actions'];
  datasource : any
  constructor( private apprenantService: ApprenantService) { }

  ngOnInit(): void {
    this.showApprenants()
  }

  showApprenants(){
    this.apprenantService.listerApprenant().subscribe(
      (result:any)=>{
        console.log(result)
        this.datasource = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }
}
