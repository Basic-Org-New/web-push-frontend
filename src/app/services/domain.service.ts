import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private apiUrl = environment.baseUrl; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  addDomain(domainData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/domains`, domainData).pipe(
      catchError(this.handleError)
    );
  }

  updateDomain(id: number, domainData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/domains/${id}`, domainData).pipe(
      catchError(this.handleError)
    );
  }

  getDomains(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/domains`).pipe(
      catchError(this.handleError)
    );
  }

  getDomainsTokens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tokens/by-domain`).pipe(
      catchError(this.handleError)
    );
  }

  getDomainById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/domains/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  deleteDomain(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/domains/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error',error)
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}
