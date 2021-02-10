import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApprenantComponent } from './detail-apprenant.component';

describe('DetailApprenantComponent', () => {
  let component: DetailApprenantComponent;
  let fixture: ComponentFixture<DetailApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
