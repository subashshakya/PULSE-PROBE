import { Injectable } from '@angular/core';
import { Environment } from 'src/environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  private rootUrl: string = Environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getPatientList = (): Observable<any> => {
    return this.http.get(this.rootUrl + 'Patient/GetAllDetails');
  }

  public createReport = (reportObj: any): Observable<any> => {
    return this.http.post(
      this.rootUrl + 'PatientReport/AddReport',
      reportObj
    );
  }

  public getAllDoctors = (): Observable<any> => {
    return this.http.get(this.rootUrl + 'Doctor/GetAllDetails');
  }

  public getDoctorsOfLabs = (
    healthCareCenter: string
  ): Observable<any> => {
    let params = new HttpParams();
    params = params.append('healthCareCenterId', 1)
    return this.http.post(
      this.rootUrl + 'HealthCareCenter/GetDoctorlistByHealthCareCenterId',
      { },
      { params },
    );
  }

  public getBookingsData = (
    healthCareCenter: string
  ): Observable<any> => {
    let params = new HttpParams();
    params = params.append('healthCareCenterId', 1);
    return this.http.post(
      this.rootUrl + 'HealthCareCenter/GetPatientBookingDetilsByHealthCareCenterId',
      { },
      { params },
    )
  }

  public getDoctorDetailsByNMCNumber = (
    nmcNumber: string
  ): Observable<any> => {
    let params = new HttpParams();
    params = params.append('nmcNumber', nmcNumber);

    return this.http.post(
      this.rootUrl + 'HealthCareCenter/searchDoctorByNMC',
      {},
      { params }
    )
  }

  public associateDoctor = (
    doctorDetails: any
  ): Observable<any> => {
    return this.http.post(
      this.rootUrl + 'HealthCareCenter/AssociateDoctorToHealthCare',
      doctorDetails
    );
  }

  public removeDoctor = (
    doctorDetails: any
  ): Observable<any> => {
    return this.http.post(
      this.rootUrl + 'HealthCareCenter/RemoveAssociatedDoctor',
      doctorDetails
    );
  }
}
