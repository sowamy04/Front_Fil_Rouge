import { Component, OnInit } from '@angular/core';
import { PromoService } from './service/promo.service'

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  promosData: any;
  constructor( private promoService : PromoService ) { }

  ngOnInit(): void {
    this.showPromos();
  }

  showPromos(){
    this.promoService.listerPromos().subscribe(
      (result:any)=>{
        console.log(result)
        this.promosData = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

}
