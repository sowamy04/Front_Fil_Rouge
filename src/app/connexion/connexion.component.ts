import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerationTokenService } from '../services/generation-token.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  helper = new JwtHelperService();
  message ="";
  loginForm : FormGroup | any
  constructor(private router:Router, private auth:GenerationTokenService) { }

  ngOnInit(): void {
    this.isAuthenticated()
    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  onLogin(){
    const loginVal = this.loginForm.value
        this.auth.getToken(loginVal).subscribe(
          (response:any)=> {localStorage.setItem('token', response.token);
          const decodedToken = this.helper.decodeToken( response.token);
          console.log(decodedToken)
          if (decodedToken.roles == "ROLE_ADMIN") {
            this.router.navigateByUrl("/admin/profils")
          }
          else if (decodedToken.roles == "ROLE_APPRENANT"){
            this.router.navigateByUrl("/apprenants")
          }
          else if (decodedToken.roles == "ROLE_FORMATEUR"){
            this.router.navigateByUrl("/formateurs")
          }
          else {
            this.router.navigateByUrl("/cm")
          }
        },
          error=> this.message = "Email ou mot de passe incorrects!"
        )
  }

  isAuthenticated(){
    const token = this.auth.RecuperationToken();
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
        if (decodedToken.roles == "ROLE_ADMIN") {
          this.router.navigateByUrl("/admin/profils")
        }
        else if (decodedToken.roles == "ROLE_APPRENANT"){
          this.router.navigateByUrl("/apprenants")
        }
        else if (decodedToken.roles == "ROLE_FORMATEUR"){
          this.router.navigateByUrl("/formateurs")
        }
        else {
          this.router.navigateByUrl("/cm")
        }
      }
  }
}
