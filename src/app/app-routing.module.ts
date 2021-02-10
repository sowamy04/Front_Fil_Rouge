import { FormateurComponent } from './formateur/formateur.component';
import { UpdateOneApprenantComponent } from './apprenant/update-one-apprenant/update-one-apprenant.component';
import { ListeApprenantsComponent } from './admin/profil-sorties/liste-apprenants/liste-apprenants.component';
import { UpdateReferentielComponent } from './admin/referentiels/update-referentiel/update-referentiel.component';
import { UpdatePromoComponent } from './admin/promos/update-promo/update-promo.component';
import { AddCompetenceComponent } from './admin/competences/add-competence/add-competence.component';
import { UpdateCompetenceComponent } from './admin/competences/update-competence/update-competence.component';
import { AddGroupeCompetenceComponent } from './admin/groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { UpdateGroupeCompetenceComponent } from './admin/groupe-competences/update-groupe-competence/update-groupe-competence.component';
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
import { AddReferentielComponent } from './admin/referentiels/add-referentiel/add-referentiel.component';
import { DetailApprenantComponent } from './admin/apprenants/detail-apprenant/detail-apprenant.component';
import { UpdateApprenantComponent } from './admin/apprenants/update-apprenant/update-apprenant.component';
import { UpdateUserComponent } from './admin/users/update-user/update-user.component';
import { ApprenantComponent } from './apprenant/apprenant.component';

const routes: Routes = [
  { path:'', redirectTo:'connexion', pathMatch:'full'},
  { path:'connexion', component:ConnexionComponent},
  { path:"update-app", component:UpdateOneApprenantComponent, canActivate:[
    TokenGuard
    ]
  },
  { path: 'apprenants', component:ApprenantComponent, canActivate:[
    TokenGuard
    ], children:[
      {  path:'info-personnelles', component:UpdateOneApprenantComponent },

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
      ]
    },
    { path:'referentiels', component:ReferentielsComponent, canActivate:[
        TokenGuard
      ]
    },
    { path:'promos', component:PromosComponent, canActivate:[
        TokenGuard
      ]
    }
    ]
  },
  { path: 'formateurs', component:FormateurComponent, canActivate:[
    TokenGuard
    ], children:[
      {  path:'update', component:UpdateApprenantComponent },
      { path:'apprenants', component:ApprenantsComponent, canActivate:[
        TokenGuard
        ],
        children:[
          { path:'attente', component:ListeApprenantsAttenteComponent, canActivate:[
            TokenGuard
            ],
          },
          { path:':id', component:DetailApprenantComponent, canActivate:[
            TokenGuard
            ],
          },
          { path:':id/update', component:UpdateApprenantComponent, canActivate:[
            TokenGuard
            ],
          },
        ]
    },
    { path:'profil-sorties', component:ProfilSortiesComponent, canActivate:[
        TokenGuard
      ], children:[
        { path:':id/users', component:ListeApprenantsComponent }
      ]
    },
    { path:'competences', component:CompetencesComponent, canActivate:[
        TokenGuard
      ], children:[
        { path:'add-competence', component:AddCompetenceComponent },
        { path:':id/update', component:UpdateCompetenceComponent }
      ]
    },
    { path:'groupe-competences', component:GroupeCompetencesComponent, canActivate:[
        TokenGuard
      ],
      children:[
        { path:'add-groupe-competence' , component:AddGroupeCompetenceComponent },
        { path:':id/update', component:UpdateGroupeCompetenceComponent }
      ]
    },
    { path:'referentiels', component:ReferentielsComponent, canActivate:[
        TokenGuard
      ], children:[
        { path:'add-referentiel', component:AddReferentielComponent },
        { path:':id/update', component:UpdateReferentielComponent }
      ]
    },
    { path:'promos', component:PromosComponent, canActivate:[
        TokenGuard
      ],
      children:[
        { path:'add-promo', component:AddPromoComponent },
        { path:':id/update', component:UpdatePromoComponent }
      ]
    },
      { path:'info-personnelles', component:InfoPersonnellesComponent, canActivate:[
          TokenGuard
        ]
      }
    ]
  },
  { path:'admin', component:AdminComponent,
    children: [
      { path:'apprenants', component:ApprenantsComponent, canActivate:[
          TokenGuard
          ],
          children:[
            { path:'attente', component:ListeApprenantsAttenteComponent, canActivate:[
              TokenGuard
              ],
            },
            { path:':id', component:DetailApprenantComponent, canActivate:[
              TokenGuard
              ],
            },
            { path:':id/update', component:UpdateApprenantComponent, canActivate:[
              TokenGuard
              ],
            },
          ]
      },
      { path:'users', component:UsersComponent, canActivate:[
        TokenGuard
    ],
        children:[
          { path:'add-user', component:AddUserComponent, canActivate:[
            TokenGuard
            ],
          },
          { path:':id/update', component:UpdateUserComponent, canActivate:[
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
        ], children:[
          { path:':id/users', component:ListeApprenantsComponent }
        ]
      },
      { path:'competences', component:CompetencesComponent, canActivate:[
          TokenGuard
        ], children:[
          { path:'add-competence', component:AddCompetenceComponent },
          { path:':id/update', component:UpdateCompetenceComponent }
        ]
      },
      { path:'groupe-competences', component:GroupeCompetencesComponent, canActivate:[
          TokenGuard
        ],
        children:[
          { path:'add-groupe-competence' , component:AddGroupeCompetenceComponent },
          { path:':id/update', component:UpdateGroupeCompetenceComponent }
        ]
      },
      { path:'referentiels', component:ReferentielsComponent, canActivate:[
          TokenGuard
        ], children:[
          { path:'add-referentiel', component:AddReferentielComponent },
          { path:':id/update', component:UpdateReferentielComponent }
        ]
      },
      { path:'promos', component:PromosComponent, canActivate:[
          TokenGuard
        ],
        children:[
          { path:'add-promo', component:AddPromoComponent },
          { path:':id/update', component:UpdatePromoComponent }
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
