import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { ReportDetail } from '../models/doctor.model';
import { PatientDetails } from '../models/doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private rootUrl = Environment.apiUrl;
  private username = '11161768';
  private password = '60-dayfreetrial';
  private authHeader = btoa(`${this.username}:${this.password}`);

  constructor(private http: HttpClient) { }

  public getReportsByDoctorId(docId: number): Observable<any> {
    // let headers = new HttpHeaders({
    //   'Authorization': 'Basic ' + this.authHeader
    // })
    const options = { withCredentials: true }
    return this.http.get(this.rootUrl + 'PatientReport/GetReportSharedToDoctor/Doctor/' + docId, options);
  }

  public getReportDetailsById(reportId: string): Observable<ReportDetail> {
    return this.http.get<ReportDetail>(this.rootUrl + 'PatientReport/GetReport/' + reportId);
  }

  public getPatientDetail(patientId: string): Observable<PatientDetails> {
    return this.http.get<PatientDetails>(this.rootUrl + 'Patient/GetById/' + patientId);
  }

  public getEchoPrediction(payLoad: any): Observable<any> {
    return this.http.post<Observable<any>>(this.rootUrl + 'EchoData/Prediction', payLoad);
  }
}
