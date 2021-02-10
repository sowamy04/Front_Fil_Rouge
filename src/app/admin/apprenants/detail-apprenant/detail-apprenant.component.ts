import { Location } from '@angular/common';
import { ApprenantService } from './../service/apprenant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.css']
})
export class DetailApprenantComponent implements OnInit {

  data : any
  id:any
  constructor( private route: ActivatedRoute, private apprenatService : ApprenantService, private location :Location ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getDetailApprenant()
  }

  getDetailApprenant(){
    this.apprenatService.detailApprenant(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      error=> console.log(error)
    )
  }

  cacher(){
    this.location.back()
  }

}
