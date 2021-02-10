import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeApprenantsComponent } from './liste-apprenants.component';

describe('ListeApprenantsComponent', () => {
  let component: ListeApprenantsComponent;
  let fixture: ComponentFixture<ListeApprenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeApprenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
