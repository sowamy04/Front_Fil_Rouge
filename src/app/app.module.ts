import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './ angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ApprenantsComponent } from './admin/apprenants/apprenants.component';
import { CompetencesComponent } from './admin/competences/competences.component';
import { GroupeCompetencesComponent } from './admin/groupe-competences/groupe-competences.component';
import { ReferentielsComponent } from './admin/referentiels/referentiels.component';
import { PromosComponent } from './admin/promos/promos.component';
import { ProfilsComponent } from './admin/profils/profils.component';
import { ProfilSortiesComponent } from './admin/profil-sorties/profil-sorties.component';
import { InfoPersonnellesComponent } from './admin/info-personnelles/info-personnelles.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { AddApprenantComponent } from './admin/apprenants/add-apprenant/add-apprenant.component';
import { AddPromoComponent } from './admin/promos/add-promo/add-promo.component';
import { AddCompetenceComponent } from './admin/competences/add-competence/add-competence.component';
import { AddGroupeCompetenceComponent } from './admin/groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { ListeUtilisateursProfilComponent } from './admin/profils/liste-utilisateurs-profil/liste-utilisateurs-profil.component';
import { ListeApprenantsAttenteComponent } from './admin/apprenants/liste-apprenants-attente/liste-apprenants-attente.component';
import { GenerationTokenService } from './services/generation-token.service';
import { InterceptorTokenService } from './services/interceptor-token.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddReferentielComponent } from './admin/referentiels/add-referentiel/add-referentiel.component';
import { DetailApprenantComponent } from './admin/apprenants/detail-apprenant/detail-apprenant.component';
import { UpdateApprenantComponent } from './admin/apprenants/update-apprenant/update-apprenant.component';
import { UpdateUserComponent } from './admin/users/update-user/update-user.component';
import { UpdateProfilSortieComponent } from './admin/profil-sorties/update-profil-sortie/update-profil-sortie.component';
import { UpdateCompetenceComponent } from './admin/competences/update-competence/update-competence.component';
import { UpdateGroupeCompetenceComponent } from './admin/groupe-competences/update-groupe-competence/update-groupe-competence.component';
import { UpdateReferentielComponent } from './admin/referentiels/update-referentiel/update-referentiel.component';
import { UpdatePromoComponent } from './admin/promos/update-promo/update-promo.component';
import { ListeApprenantsComponent } from './admin/profil-sorties/liste-apprenants/liste-apprenants.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { UpdateOneApprenantComponent } from './apprenant/update-one-apprenant/update-one-apprenant.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AdminComponent,
    UsersComponent,
    ApprenantsComponent,
    CompetencesComponent,
    GroupeCompetencesComponent,
    ReferentielsComponent,
    PromosComponent,
    ProfilsComponent,
    ProfilSortiesComponent,
    InfoPersonnellesComponent,
    AddUserComponent,
    AddApprenantComponent,
    AddPromoComponent,
    AddCompetenceComponent,
    AddGroupeCompetenceComponent,
    ListeUtilisateursProfilComponent,
    ListeApprenantsAttenteComponent,
    NotFoundComponent,
    AddReferentielComponent,
    DetailApprenantComponent,
    UpdateApprenantComponent,
    UpdateUserComponent,
    UpdateProfilSortieComponent,
    UpdateCompetenceComponent,
    UpdateGroupeCompetenceComponent,
    UpdateReferentielComponent,
    UpdatePromoComponent,
    ListeApprenantsComponent,
    FormateurComponent,
    ApprenantComponent,
    UpdateOneApprenantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    JwtModule,
    HttpClientModule,
    FormsModule,
    NgxCsvParserModule
  ],
  providers: [
    GenerationTokenService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass : InterceptorTokenService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
