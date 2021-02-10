import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/user.service';
import Swal from 'sweetalert2';

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
        console.log(result)
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

  supprimer(UserData : any){
    Swal.fire({
      title: 'veut-tu vraiment supprimer cet utilisateur?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(UserData.id).subscribe(
          (result : any)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Utilisateur supprimé avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(result)
          },
          error=>console.log(error)
        )
      } else if (result.isDenied) {
        Swal.fire('Suppression annulée', '', 'info')
      }
    })
  }
}
