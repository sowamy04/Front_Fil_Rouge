import { GenerationTokenService } from './../../services/generation-token.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { InfoService } from './service/info.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-info-personnelles',
  templateUrl: './info-personnelles.component.html',
  styleUrls: ['./info-personnelles.component.css']
})
export class InfoPersonnellesComponent implements OnInit {
  userForm : FormGroup | any
  id : any
  helper = new JwtHelperService()
  tokenData : any
  data : any
  file : any
  constructor( private formBuilder:FormBuilder, private location:Location, private infoService :InfoService , private token : GenerationTokenService ) { }

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
    this.infoService.mesInfos(this.id).subscribe(
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

  onUpdateForm(updateForm : any){
    if(updateForm.value){
    console.log(updateForm.value.prenom)
    const formData  = new FormData()
    formData.append("prenom", updateForm.value.prenom)
    formData.append("nom", updateForm.value.nom)
    formData.append("email", updateForm.value.email)
    formData.append("password", updateForm.value.password)
    formData.append("telephone", updateForm.value.telephone)
    formData.append("profil", updateForm.value.profil)
    formData.append('photo', this.file);
    console.log(formData)
      Swal.fire({
        title: 'voulez-vous vraiment modifier vos informations?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Modifier`,
        denyButtonText: `Annuler`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.infoService.UpdateInfo(this.id, formData).subscribe(
            (result : any)=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Informations modifiées avec succès',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(result)
            },
            error=>console.log(error)
          )
        } else if (result.isDenied) {
          Swal.fire('Modification annulée', '', 'info')
        }
      })
      }
  }

  retour(){
    this.location.back()
  }

}
