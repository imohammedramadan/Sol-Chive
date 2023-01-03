import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { GoogleLogin } from 'src/app/interfaces/google-login';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:5000/';
  private apiUrl = `${this.backendUrl}api/v1/auth/`;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  getGoogleLogin(): Observable<GoogleLogin> {
    const url = `${this.apiUrl}google`;
    return this.http.get<GoogleLogin>(url);
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}logout`;
    return this.http.delete<any>(url, httpOptions);
  }

  isAuthenticated() {
    this.userService.getUserBasicInfo().subscribe({
      next: (res) => {
        this.cookieService.set('isLoggedIn', 'true');
      },
      error: (err) => {
        this.cookieService.set('isLoggedIn', 'false');
      },
    });
  }
}
