import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcDashboard } from './qc-dashboard';

describe('QcDashboard', () => {
  let component: QcDashboard;
  let fixture: ComponentFixture<QcDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
