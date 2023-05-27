import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlistBackComponent } from './patientlistBack.component';

describe('PatientlistBackComponent', () => {
  let component: PatientlistBackComponent;
  let fixture: ComponentFixture<PatientlistBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientlistBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientlistBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
