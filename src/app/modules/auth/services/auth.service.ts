import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl = Environment.apiUrl;
  private username = '11161768';
  private password = '60-dayfreetrial';
  private authHeader = btoa(`${this.username}:${this.password}`);
  private readonly TOKEY_KEY = 'jwt';

  constructor(
    private http: HttpClient,
  ) { }

  public body = {
    "UserName":"HariAryal",
    "Email":"Hariaryal@gmail.com",
    "Password":"HelloWorld"
  };

  public signUp(formValues: any): Observable<any> {
    return this.http.post(
      this.rootUrl + 'User/UserLogin',
      formValues,
      );
    }

  public signIn(formValues: any): Observable<any> {

    const options = { withCredentials: false }
    return this.http.post(this.rootUrl + 'User/UserLogin', formValues, options );
  }

  public setToken = (token: any): void => {
    localStorage.setItem(this.TOKEY_KEY, token)
  }
}
