import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleLogin } from '../interfaces/google-login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:5000/api/v1/auth/';
  constructor(private http: HttpClient) {}

  getGoogleLogin(): Observable<GoogleLogin> {
    const url = `${this.apiUrl}google`;
    return this.http.get<GoogleLogin>(url);
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}logout`;
    return this.http.delete<any>(url, httpOptions);
  }
}
