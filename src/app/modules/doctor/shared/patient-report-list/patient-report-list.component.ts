import { Component, Input, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { DoctorReport } from '../../models/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-report-list',
  templateUrl: './patient-report-list.component.html',
  styleUrls: ['./patient-report-list.component.scss']
})
export class PatientReportListComponent implements OnInit, AfterViewInit, AfterContentInit{
  @Input() doctorReports: DoctorReport[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.doctorReports);
  }

  ngAfterViewInit(): void {
    console.log(this.doctorReports[0].patientId);    
  }

  ngAfterContentInit(): void {
    console.log(this.doctorReports[0].patientId);    
    
  }
  public goToDetailsPage(reportId: number) {
    this.router.navigate(['/doctor/report-detail/', reportId]);
  }
}
