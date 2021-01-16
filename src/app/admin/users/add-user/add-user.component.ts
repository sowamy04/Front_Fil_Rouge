import Swal from 'sweetalert2';
import { UserService } from './../Service/user.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm:NgForm | any;
  constructor( private location : Location, public userService : UserService) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm : any ){
    console.log(registerForm.value.prenom)
    const formData  = new FormData()
    formData.append("prenom", registerForm.value.prenom)
    formData.append("nom", registerForm.value.nom)
    formData.append("email", registerForm.value.email)
    formData.append("password", registerForm.value.password)
    formData.append("telephone", registerForm.value.telephone)
    console.log(formData)
    if(registerForm.value){
      if (registerForm.value.profil == 1) {
        this.userService.addAdmin(formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Utilisateur ajouté avec succès',
              showConfirmButton: false,
              timer: 1500
            })

          },
          error=> console.log(error)
        )
      }
      else if (registerForm.value.profil == 2) {
        this.userService.addFormateur(formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })

          },
          error=> console.log(error)
        )
      }
      else if (registerForm.value.profil == 3) {
        this.userService.addCm(formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })

          },
          error=> console.log(error)
        )
      }
      else {
        console.log("pas disponible")
    }
    }
  }

  cacher(){
    this.location.back()
    this.userService.colDiv = "col-md-12"
  }

  uploadFile(event : any) {
   /*  let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);

      if (!_.includes(af, file.type)) {
        alert('Only EXCEL Docs Allowed!');
      } else {
        this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile').setValue(file);
      }
    } */
  }

}
