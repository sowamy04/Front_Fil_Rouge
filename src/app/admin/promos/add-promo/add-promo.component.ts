import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css']
})
export class AddPromoComponent implements OnInit {

  userForm: FormGroup | any;

  constructor( private formBuilder:FormBuilder, private location:Location) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      prenom: ['', [Validators.required], Validators.pattern('^[a-zA-Z]+$')],
      nom: ['',[Validators.required], Validators.pattern('^[a-zA-Z]+$')],
      email: ['', [Validators.required], Validators.email]
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      alert('Promo form is valid!!')
    } else {
      alert('Promo form is not valid!!')
    }
  }

  retour(){
    this.location.back()
  }

}
