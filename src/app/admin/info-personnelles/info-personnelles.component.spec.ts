import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonnellesComponent } from './info-personnelles.component';

describe('InfoPersonnellesComponent', () => {
  let component: InfoPersonnellesComponent;
  let fixture: ComponentFixture<InfoPersonnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonnellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPersonnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
