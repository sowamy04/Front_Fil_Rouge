import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-info-personnelles',
  templateUrl: './info-personnelles.component.html',
  styleUrls: ['./info-personnelles.component.css']
})
export class InfoPersonnellesComponent implements OnInit {
  userForm : FormGroup | any
  constructor( private formBuilder:FormBuilder, private location:Location) { }
  readOnly = true
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      prenom: ['', [Validators.required]],
      nom: ['',[Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  onSubmit(){
   /*  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    }) */
    this.readOnly = false
  }

  retour(){
    this.location.back()
  }

}
