import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddSolution } from '../interfaces/add-solution';
import { AllSolutions } from '../interfaces/all-solutions';
import { Solution } from '../interfaces/solution';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  private anonApiUrl = 'http://localhost:5000/api/v1/anonymous';
  private userApiUrl = 'http://localhost:5000/api/v1/user';

  constructor(private http: HttpClient) {}

  getAnonSolutions(userEmail: string): Observable<AllSolutions> {
    const url = `${this.anonApiUrl}/solutions/${userEmail}`;
    return this.http.get<AllSolutions>(url);
  }

  getOneAnonSolution(solutionId: string): Observable<Solution> {
    const url = `${this.anonApiUrl}/solution/${solutionId}`;
    return this.http.get<Solution>(url);
  }

  getUserSolutions(): Observable<AllSolutions> {
    const url = `${this.userApiUrl}/solutions`;
    return this.http.get<AllSolutions>(url, httpOptions);
  }

  addUserSolution(solution: AddSolution) {
    const url = `${this.userApiUrl}/solutions`;
    return this.http.post<AddSolution>(url, solution, httpOptions);
  }

  getOneUserSolution(solutionId: string): Observable<Solution> {
    const url = `${this.userApiUrl}/solutions/${solutionId}`;
    console.log(url);
    return this.http.get<Solution>(url, httpOptions);
  }

  deleteUserSolution(solutionId: number) {
    const url = `${this.userApiUrl}/solutions/${solutionId}`;
    return this.http.delete<Solution>(url, httpOptions);
  }

  updateUserSolution(solutionId: number, solution: Solution) {
    const url = `${this.userApiUrl}/solutions/${solutionId}`;
    return this.http.put<Solution>(url, solution, httpOptions);
  }
}
