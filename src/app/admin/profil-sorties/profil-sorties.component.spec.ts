import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortiesComponent } from './profil-sorties.component';

describe('ProfilSortiesComponent', () => {
  let component: ProfilSortiesComponent;
  let fixture: ComponentFixture<ProfilSortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
