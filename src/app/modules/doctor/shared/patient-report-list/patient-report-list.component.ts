import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-report-list',
  templateUrl: './patient-report-list.component.html',
  styleUrls: ['./patient-report-list.component.scss']
})
export class PatientReportListComponent {
  reportlist = [
    {
      reportId: 'RE-1234',
      reportStatus: 'Verified',
      patientName: 'Three',
      labBookedin: 'Wasa Pasa',
      reportType: 'Follow up'
    },
    {
      reportId: 'RE-1234',
      reportStatus: 'Verified',
      patientName: 'Three',
      labBookedin: 'Wasa Pasa',
      reportType: 'Follow up'
    },
    {
      reportId: 'RE-1234',
      reportStatus: 'Verified',
      patientName: 'Three',
      labBookedin: 'Wasa Pasa',
      reportType: 'Follow up'
    },
    {
      reportId: 'RE-1234',
      reportStatus: 'Verified',
      patientName: 'Three',
      labBookedin: 'Wasa Pasa',
      reportType: 'Follow up'
    },
    {
      reportId: 'RE-1234',
      reportStatus: 'Verified',
      patientName: 'Three',
      labBookedin: 'Wasa Pasa',
      reportType: 'Follow up'
    }
  ]
}
