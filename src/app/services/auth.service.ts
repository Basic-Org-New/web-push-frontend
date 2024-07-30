import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/signup`, data);
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);
  }

  // Additional methods for JWT management
  getToken() {
    return localStorage.getItem('access_token');
  }
  requestResetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/request-reset-password`, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/reset-password`, data);
  }
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
