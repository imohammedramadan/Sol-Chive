import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserAvatar } from 'src/app/interfaces/user-avatar';
import { UserSettings } from 'src/app/interfaces/user-settings';
import { User } from 'src/app/interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendUrl = 'http://localhost:5000/';
  private apiUrl = `${this.backendUrl}api/v1/user`;

  constructor(private http: HttpClient) {}

  getAnonUserData(userEmail: string): Observable<User> {
    const url = `${this.apiUrl}?email=${userEmail}`;
    return this.http.get<User>(url);
  }

  getUserProfileData(): Observable<User> {
    const url = `${this.apiUrl}/profile`;
    return this.http.get<User>(url, httpOptions);
  }

  getUserBasicInfo(): Observable<User> {
    const url = `${this.apiUrl}/basic-info`;
    return this.http.get<User>(url, httpOptions);
  }

  updateUserAvatar(): Observable<UserAvatar> {
    const url = `${this.apiUrl}/update-avatar`;
    return this.http.patch<UserAvatar>(url, {}, httpOptions);
  }

  getUserSettings(): Observable<UserSettings> {
    const url = `${this.apiUrl}/settings`;
    return this.http.get<UserSettings>(url, httpOptions);
  }

  updateUserSettings(settings: UserSettings): Observable<UserSettings> {
    const url = `${this.apiUrl}/settings`;
    return this.http.put<UserSettings>(url, settings, httpOptions);
  }
}
