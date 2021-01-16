import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUtilisateursProfilComponent } from './liste-utilisateurs-profil.component';

describe('ListeUtilisateursProfilComponent', () => {
  let component: ListeUtilisateursProfilComponent;
  let fixture: ComponentFixture<ListeUtilisateursProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUtilisateursProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUtilisateursProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
