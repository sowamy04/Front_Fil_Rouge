import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  data : any
  id:any
  file : any
  constructor( private route: ActivatedRoute, private userService : UserService, private location : Location ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getDetailUser()
  }

  getDetailUser(){
    this.userService.detailUser(this.id).subscribe(
      (response : any)=>{
        console.log(response)
        this.data = response
      },
      (error : any)=> console.log(error)
    )
  }

  uploadFile(event : any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file)
    }
  }

  onUpdate(updateForm : any) {
    console.log(updateForm.value)
    /* var content = '<a id="a"><b id="b">hey!</b></a>';
    var myBlob = new Blob([content], { type: "text/xml"}) */
    const formData  = new FormData()
    formData.append("prenom", updateForm.value.prenom)
    formData.append("nom", updateForm.value.nom)
    formData.append("email", updateForm.value.email)
    formData.append("password", 'pass1234')
    formData.append("telephone", updateForm.value.telephone)
    formData.append("profil", updateForm.value.profil)
    if (this.file) {
      formData.append('photo', this.file);
    }
    console.log(formData)
    if(updateForm.value){
        this.userService.updateUser(this.id, formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Utilisateur modifié avec succès',
              showConfirmButton: false,
              timer: 1500
            })
          },
          error=> console.log(error)
        )
      }
  }

  cacher(){
    this.location.back()
    this.userService.colDiv = "col-md-12"
  }

}
