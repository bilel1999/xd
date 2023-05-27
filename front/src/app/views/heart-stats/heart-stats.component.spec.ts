import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartStatsComponent } from './heart-stats.component';

describe('HeartStatsComponent', () => {
  let component: HeartStatsComponent;
  let fixture: ComponentFixture<HeartStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
