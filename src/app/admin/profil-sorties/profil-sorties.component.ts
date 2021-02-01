import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from './service/profil-sortie.service';

@Component({
  selector: 'app-profil-sorties',
  templateUrl: './profil-sorties.component.html',
  styleUrls: ['./profil-sorties.component.css']
})
export class ProfilSortiesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle', 'details', 'supprimer']
  profilSortiesData : any
  constructor(private profilSorties: ProfilSortieService) { }

  ngOnInit(): void {
    this.showProfilSorties()
  }

  showProfilSorties(){
    this.profilSorties.listerProfilSorties().subscribe(
      (result:any)=>{
        console.log(result)
        this.profilSortiesData = result
        console.log(result);
      },
      (error:any)=>console.log(error.error.message)
    )
  }

}
