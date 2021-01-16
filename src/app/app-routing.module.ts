import { AddGroupeCompetenceComponent } from './admin/groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { AddPromoComponent } from './admin/promos/add-promo/add-promo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantsComponent } from './admin/apprenants/apprenants.component';
import { ProfilsComponent } from './admin/profils/profils.component';
import { ProfilSortiesComponent } from './admin/profil-sorties/profil-sorties.component';
import { CompetencesComponent } from './admin/competences/competences.component';
import { GroupeCompetencesComponent } from './admin/groupe-competences/groupe-competences.component';
import { ReferentielsComponent } from './admin/referentiels/referentiels.component';
import { PromosComponent } from './admin/promos/promos.component';
import { InfoPersonnellesComponent } from './admin/info-personnelles/info-personnelles.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UsersComponent } from './admin/users/users.component';
import { ListeUtilisateursProfilComponent } from './admin/profils/liste-utilisateurs-profil/liste-utilisateurs-profil.component';
import { ListeApprenantsAttenteComponent } from './admin/apprenants/liste-apprenants-attente/liste-apprenants-attente.component';
import { TokenGuard } from './guard/token.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'connexion', pathMatch:'full'},
  { path:'connexion', component:ConnexionComponent},
  { path:'admin', component:AdminComponent,
    children: [
      { path:'apprenants', component:ApprenantsComponent, canActivate:[
          TokenGuard
      ],
        children:[
          { path:'attente', component:ListeApprenantsAttenteComponent, canActivate:[
            TokenGuard
        ],}
        ]
      },
      { path:'users', component:UsersComponent, canActivate:[
        TokenGuard
    ],
        children:[
          { path:'add-user', component:AddUserComponent, canActivate:[
            TokenGuard
            ],
          }
        ]
      },
      { path:'profils', component:ProfilsComponent, canActivate:[
          TokenGuard
        ],
        children:[
          { path:':id/users-profil', component: ListeUtilisateursProfilComponent, canActivate:[
            TokenGuard
            ]
          }
        ]
      },
      { path:'profil-sorties', component:ProfilSortiesComponent, canActivate:[
          TokenGuard
        ]
      },
      { path:'competences', component:CompetencesComponent, canActivate:[
          TokenGuard
        ]
      },
      { path:'groupe-competences', component:GroupeCompetencesComponent, canActivate:[
          TokenGuard
        ],
        children:[
          { path:'add-groupe-competence' , component:AddGroupeCompetenceComponent }
        ]
      },
      { path:'referentiels', component:ReferentielsComponent, canActivate:[
          TokenGuard
        ]
      },
      { path:'promos', component:PromosComponent, canActivate:[
          TokenGuard
        ],
        children:[
          { path:'add-promo', component:AddPromoComponent }
        ]
      },
      { path:'info-personnelles', component:InfoPersonnellesComponent, canActivate:[
          TokenGuard
        ]
      }
    ]
  },
  { path:'not-found', component:NotFoundComponent },
  { path:'**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
