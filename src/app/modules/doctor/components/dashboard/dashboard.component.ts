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
  public tableHeadings = ['Field', 'Normal', 'Actual'];

  constructor(
    private docService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatientInfo();
  }

  public getPatientInfo(): void {
    console.log(localStorage.getItem('jwt'))
    this.docService.getReportsByDoctorId(2).subscribe(res => {
      this.doctorReportsById = res;
    })
  }

  public goToDetailsPage(patientId: number, reportId: number) {
    this.router.navigate(['/doctor/report-detail/', patientId], { queryParams: { reportId: reportId }});
  }
}
