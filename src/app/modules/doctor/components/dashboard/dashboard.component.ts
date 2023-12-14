import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorReport } from '../../models/doctor.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doctorData: any;
  public reports: any;
  public docId: string | null = '';
  public doctorReportsById: DoctorReport[] = [];

  constructor(
    private docService: DoctorService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatientInfo();
  }
  
  public tableHeadings = ['Field', 'Normal', 'Actual'];
  public getPatientInfo(): void {
    this.docService.getReportsByDoctorId(2).subscribe(res => {
      this.doctorReportsById = res;
      console.log(this.doctorReportsById);
      console.log(this.doctorReportsById[0].patientId);
    })
  }

  public goToDetailsPage(patientId: number, reportId: number) {
    this.router.navigate(['/doctor/report-detail/', patientId], { queryParams: { reportId: reportId }});
  }
}
