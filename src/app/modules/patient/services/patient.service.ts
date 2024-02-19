import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientReportRootUtl = Environment.apiUrl + 'PatientReport';
  private patientDetail = Environment.apiUrl + 'Patient/';
  private labsBaseUrl = Environment.apiUrl + 'HealthCareCenter/';
  private bookingsBaseUrl = Environment.apiUrl + 'Booking/'; 
  
  constructor(private http: HttpClient) { }

  public getPatientInformation(patientId: number): Observable<any> {
    return this.http.get(this.patientDetail + 'GetById/' + patientId);
  }
  
  public getPatientReportById(patientId: number): Observable<any> {
    return this.http.get(this.patientReportRootUtl + '/GetReport/' + patientId);
  }

  public sharePatientReport(payload: any): Observable<any> {
    return this.http.post(this.patientReportRootUtl + '/ShareReport', payload)
  }

  public getAllHealthcareCenters(): Observable<any> {
    return this.http.get(this.labsBaseUrl + 'GetAllDetails');
  }

  public createBooking(): Observable<any> {
    return this.http.post(this.bookingsBaseUrl, {})
  }

  public getAllDoctors(): Observable<any> {
    return this.http.get(Environment.apiUrl + 'Doctor/GetAllDetails');
  }

  public getAllLabs(): Observable<any> {
    return this.http.get(Environment.apiUrl + 'HealthCareCenter/GetAllDetails');
  }
}
