import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let clonedReq = req;

    if (token) {
      clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.status === 401) {
          // Handle 401 Unauthorized errors
          this.authService.logout();
          this.router.navigate(['/auth/login']);
          errorMessage = 'Your session has expired. Please log in again.';
        } else if (error.error && error.error.message) {
          // Handle other errors and extract message
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
