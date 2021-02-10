import { ProfilService } from './../../profils/service/profil.service';
import  Swal  from 'sweetalert2';
import { ApprenantService } from './../service/apprenant.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxCsvParser } from 'ngx-csv-parser';
import { ViewChild } from '@angular/core';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {

  apprenantForm : NgForm | any;
  constructor( private apprenantService : ApprenantService, private profilService : ProfilService, private ngxCsvParser: NgxCsvParser ) { }

  profilsData: any;
  apprenantLib: any;
  csvRecords: any[] = [];
  header = false;
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
      formData.append('profil', '4')
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

  soumettre(csvFile : any){

  }

  //@ViewChild('fileImportInput', { static: false }) fileImportInput: any;
  handleFileSelect($event : any) {
    const files = $event.srcElement.files;
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' }).pipe().subscribe(
      (result: any) => {
        //console.log('Result', result);
        this.csvRecords = result;
        console.log(this.csvRecords[1][0])
        this.soumettre(this.csvRecords);
        for (let index = 1; index < this.csvRecords.length; index++){
          const formData = new FormData()
          //formData.append('email', this.csvRecords[index][0])
          //formData.append('profil', '4')
          console.log(formData)
          console.log("ok")
          this.apprenantService.addApprenant(formData).subscribe(
            (response : any)=> {
              console.log(response)
              if (this.csvRecords.length -1) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Groupe d\'apprenants ajouté avec succès',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            },
            (error : any)=> console.log('error lors de l\'insertion')
          )
        }

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      }
    );
  }

}
