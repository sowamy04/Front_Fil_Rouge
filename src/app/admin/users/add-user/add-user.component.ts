import { ProfilService } from './../../profils/service/profil.service';
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
  file : any
  constructor( private location : Location, public userService : UserService, public profilService : ProfilService) { }

  profilsData: any;
  ngOnInit(): void {
    this.showProfils();
  }

  showProfils(){
    this.profilService.listerProfils().subscribe(
      (result:any)=>{
        console.log(result)
        this.profilsData = result
      },
      (error:any)=>console.log(error.error.message)
    )
  }

  uploadFile(event : any) {
    if (event.target.files.length > 0) {
       this.file = event.target.files[0];
      console.log(this.file)
    }
  }

  onSubmit(registerForm : any ){
    console.log(registerForm.value.prenom)
    //var content = '<a id="a"><b id="b">hey!</b></a>';
    //var myBlob = new Blob([content], { type: "text/xml"})
    const formData  = new FormData()
    formData.append("prenom", registerForm.value.prenom)
    formData.append("nom", registerForm.value.nom)
    formData.append("email", registerForm.value.email)
    formData.append("password", registerForm.value.password)
    formData.append("telephone", registerForm.value.telephone)
    formData.append("profil", registerForm.value.profil)
    if (this.file) {
      formData.append('photo', this.file);
    }
    console.log(formData)
      this.userService.addUser(formData).subscribe(
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

  cacher(){
    this.location.back()
    this.userService.colDiv = "col-md-12"
  }

}
