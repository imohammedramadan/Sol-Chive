import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAvatar } from '../interfaces/user-avatar';
import { UserSettings } from '../interfaces/user-settings';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/v1/user';

  constructor(private http: HttpClient) {}

  getAnonUserData(userEmail: string): Observable<User> {
    const url = `${this.apiUrl}?email=${userEmail}`;
    return this.http.get<User>(url);
  }

  getUserProfileData(): Observable<User> {
    const url = `${this.apiUrl}/profile`;
    return this.http.get<User>(url);
  }

  getUserBasicInfo(): Observable<User> {
    const url = `${this.apiUrl}/basic-info`;
    return this.http.get<User>(url);
  }

  updateUserAvatar(): Observable<UserAvatar> {
    const url = `${this.apiUrl}/update-avatar`;
    return this.http.patch<UserAvatar>(url, {});
  }

  getUserSettings(): Observable<UserSettings> {
    const url = `${this.apiUrl}/settings`;
    return this.http.get<UserSettings>(url);
  }

  updateUserSettings(settings: UserSettings): Observable<UserSettings> {
    const url = `${this.apiUrl}/settings`;
    return this.http.put<UserSettings>(url, settings);
  }
}
