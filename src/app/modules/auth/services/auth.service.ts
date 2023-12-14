import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl = Environment.apiUrl;
  constructor(private http: HttpClient) { }

public body = `{
  "UserName":"HariAryal",
  "Email":"Hariaryal@gmail.com",
  "Password":"HelloWorld"
}`;
  public signUp(formValues: any): Observable<any> {
    return this.http.post('http://192.168.1.107:1122/User/UserLogin', formValues);
  }

  public someMethod() {
    return this.http.get('http://192.168.1.107:1122/PatientReport/GetReportSharedToDoctor/Doctor/2').subscribe(res => {
      console.log(res);
    });
  }

  public signIn(formValues: any): Observable<any> {
    return this.http.post('http://pulseprobe-001-site1.ftempurl.com/User/UserLogin', formValues);
  }
}
