import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InfoService } from './../../admin/info-personnelles/service/info.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GenerationTokenService } from './../../services/generation-token.service';
import { Location } from '@angular/common';
import { ApprenantService } from './../../admin/apprenants/service/apprenant.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-one-update-apprenant',
  templateUrl: './update-one-apprenant.component.html',
  styleUrls: ['./update-one-apprenant.component.css']
})
export class UpdateOneApprenantComponent implements OnInit {

  updateForm : NgForm | any
  file: any
  id : any
  tokenData : any
  data : any
  helper = new JwtHelperService
  constructor( private apprenantService : ApprenantService, private route : Router ,private location : Location, private token : GenerationTokenService, private infoService : InfoService) { }

  ngOnInit(): void {
    this.getInfo()
  }


  getInfo(){
    this.tokenData = this.token.RecuperationToken()
    console.log(this.tokenData)
    const decodedToken = this.helper.decodeToken( this.tokenData);
    console.log(decodedToken)
    this.id = decodedToken.id
    console.log(this.id)
    this.apprenantService.detailApprenant(this.id).subscribe(
      (result : any)=>{
        this.data = result
        console.log(result)
      },
      error=> console.log(error)
    )
  }

  uploadFile(event : any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file)
    }
  }

  onUpdateForm(updateForm : any) {
    console.log(updateForm.value.prenom)
    const formData  = new FormData()
    formData.append("prenom", updateForm.value.prenom)
    formData.append("nom", updateForm.value.nom)
    formData.append("email", updateForm.value.email)
    formData.append("password", updateForm.value.password)
    formData.append("telephone", updateForm.value.telephone)
    formData.append("profil", updateForm.value.profil)
    formData.append("genre", updateForm.value.genre)
    formData.append("adresse", updateForm.value.adresse)
    if (this.file) {
      formData.append('photo', this.file);
    }
    console.log(formData)
    if(updateForm.value){
        this.apprenantService.updateApprenant(this.id, formData).subscribe(
          (response : any)=> {
            console.log(response)
            swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Apprenant modifié avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            this.token.logout()
            this.route.navigateByUrl('/connexion')
          },
          error=> console.log(error)
        )
      }
  }

}
