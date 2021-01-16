import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'photo', 'prenom', 'nom', 'telephone', 'email', 'profil'];
  datasource : any
  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(){
    this.userService.listerUtilisateur().subscribe(
      (result:any)=>{
        console.log(result.photo)
        this.datasource = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  transform(image: string){
    if(image){
      return "data:image/jpg;base64," + image
    }
    return "../../../assets/images/connexion.png";
  }

  ajouterUser(){
    this.userService.colDiv = "col-md-8";
    this.userService.isOpen = true
  }
}
