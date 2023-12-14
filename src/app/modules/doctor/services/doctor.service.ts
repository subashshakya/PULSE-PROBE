import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { ReportDetail } from '../models/doctor.model';
import { PatientDetails } from '../models/doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  public getReportsByDoctorId(docId: number): Observable<any> {
    return this.http.get('http://pulseprobe-001-site1.ftempurl.com/PatientReport/GetReportSharedToDoctor/Doctor/' + docId);
  }

  public getReportDetailsById(reportId: string): Observable<ReportDetail> {
    return this.http.get<ReportDetail>('http://pulseprobe-001-site1.ftempurl.com/PatientReport/GetReport/' + reportId);
  }

  public getPatientDetail(patientId: string): Observable<PatientDetails> {
    return this.http.get<PatientDetails>('http://pulseprobe-001-site1.ftempurl.com/Patient/GetById/' + patientId);
  }

  public getEchoPrediction(payLoad: any): Observable<any> {
    return this.http.post<Observable<any>>('http://pulseprobe-001-site1.ftempurl.com/EchoData/Prediction', payLoad);
  }
}
