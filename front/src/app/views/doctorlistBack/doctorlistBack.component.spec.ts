import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistBackComponent } from './doctorlistBack.component';

describe('DoctorlistBackComponent', () => {
  let component: DoctorlistBackComponent;
  let fixture: ComponentFixture<DoctorlistBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorlistBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorlistBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
