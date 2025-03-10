import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private apiUrl = environment.baseUrl; // Base URL for your API

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tokens/stats`);
  }

  getAllTime(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tokens/all-time`);
  }
}
