import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupeCompetenceComponent } from './update-groupe-competence.component';

describe('UpdateGroupeCompetenceComponent', () => {
  let component: UpdateGroupeCompetenceComponent;
  let fixture: ComponentFixture<UpdateGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
