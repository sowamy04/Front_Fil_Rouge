import { ProfilService } from './../../profils/service/profil.service';
import  Swal  from 'sweetalert2';
import { ApprenantService } from './../service/apprenant.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {

  apprenantForm : NgForm | any;
  constructor( private apprenantService : ApprenantService, private profilService : ProfilService ) { }

  profilsData: any;
  apprenantLib: any;
  ngOnInit(): void {
  }

  showProfils(): any{
    this.profilService.listerProfils().subscribe(
      (result:any)=>{
        console.log(result)
        this.profilsData = result
        for (let profil of this.profilsData) {
          if (profil.libelle == "APPRENANT") {
            this.apprenantLib = profil.id;
            console.log(this.apprenantLib)
          }
        }
      },
      (error:any)=>console.log(error.error.message)
    )
  }


  onSubmit( apprenantForm: any){
    if (apprenantForm.value) {
       //const appProf = this.showProfils();
       console.log(this.showProfils())
      const formData = new FormData()
      formData.append('email', apprenantForm.value.email)
      formData.append('profil', this.apprenantLib)
      this.apprenantService.addApprenant(formData).subscribe(
        (response : any)=> {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Apprenant ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          })

          console.log(response)
        },
        error=> console.log(error.error.message)

      )
    }

  }

  soumettre(){
    
  }

  handleFileSelect(evt : any) {
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      console.log(csv)
      /* this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let orderDetails = {
              order_id: results.data[i].Address,
              age: results.data[i].Age
            };
           this.test.push(orderDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
        }
      }); */
    }
  }

}
