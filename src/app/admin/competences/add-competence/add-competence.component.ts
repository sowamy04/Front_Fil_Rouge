import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  competenceForm : FormGroup | any ;
  constructor( private formBuilder:FormBuilder, private location : Location ) { }

  ngOnInit(): void {
    this.competenceForm = this.formBuilder.group({
      libelle: ['', [Validators.required]]
    })
  }

  onSubmit(){
    if(this.competenceForm.valid){
      alert('Competence form is valid!!')
    } else {
      alert('Competence form is not valid!!')
    }
  }
  cacher(){
    this.location.back()
  }

}
