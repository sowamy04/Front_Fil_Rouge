import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ApprenantService } from './../service/apprenant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-apprenant',
  templateUrl: './update-apprenant.component.html',
  styleUrls: ['./update-apprenant.component.css']
})
export class UpdateApprenantComponent implements OnInit {

  data : any
  id:any
  file : any
  constructor( private route: ActivatedRoute, private apprenatService : ApprenantService, private location : Location ) { }

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

  uploadFile(event : any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file)
    }
  }

  onUpdate(updateForm : any) {
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
    formData.append('photo', this.file);
    console.log(formData)
    if(updateForm.value){
        this.apprenatService.updateApprenant(this.id, formData).subscribe(
          (response : any)=> {
            console.log(response)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Apprenant modifié avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            this.location.back()
          },
          error=> console.log(error)
        )
      }
  }

  cacher(){
    this.location.back()
  }
}
