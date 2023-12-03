import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReportListComponent } from './patient-report-list.component';

describe('PatientReportListComponent', () => {
  let component: PatientReportListComponent;
  let fixture: ComponentFixture<PatientReportListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientReportListComponent]
    });
    fixture = TestBed.createComponent(PatientReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
