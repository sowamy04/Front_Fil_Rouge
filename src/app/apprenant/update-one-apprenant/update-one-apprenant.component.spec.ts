import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneApprenantComponent } from './update-one-apprenant.component';

describe('UpdateApprenantComponent', () => {
  let component: UpdateOneApprenantComponent;
  let fixture: ComponentFixture<UpdateOneApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOneApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
