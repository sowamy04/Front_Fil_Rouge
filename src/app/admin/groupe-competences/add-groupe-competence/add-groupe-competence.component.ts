import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {

  groupeCompetenceForm : FormGroup | any;
  constructor( private formBuilder:FormBuilder , private location : Location) { }

  ngOnInit(): void {
    this.groupeCompetenceForm = this.formBuilder.group({
      libelle: ['', [Validators.required]],
      competences: ['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.groupeCompetenceForm.valid){
      alert('Groupe competence form is valid!!')
    } else {
      alert('Groupe competence form is not valid!!')
    }
  }

  cacher(){
    this.location.back()
  }

}
