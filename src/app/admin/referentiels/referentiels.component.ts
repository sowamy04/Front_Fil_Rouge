import { Component, OnInit } from '@angular/core';
import { ReferentielService } from './service/referentiel.service'

@Component({
  selector: 'app-referentiels',
  templateUrl: './referentiels.component.html',
  styleUrls: ['./referentiels.component.css']
})
export class ReferentielsComponent implements OnInit {

  referentielsData : any
  constructor(private referentielService : ReferentielService) { }

  ngOnInit(): void {
    this.showReferentiels()
  }

  showReferentiels(){
    this.referentielService.listerReferentiels().subscribe(
      (result:any)=>{
        console.log(result)
        this.referentielsData = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }
}
