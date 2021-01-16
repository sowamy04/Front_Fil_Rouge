import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeApprenantsAttenteComponent } from './liste-apprenants-attente.component';

describe('ListeApprenantsAttenteComponent', () => {
  let component: ListeApprenantsAttenteComponent;
  let fixture: ComponentFixture<ListeApprenantsAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeApprenantsAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeApprenantsAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
