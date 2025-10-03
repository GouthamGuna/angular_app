import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly BASE_URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  validateUser(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.BASE_URL}/validateUser/${password}`, {})
      .pipe(
        map(response => {
            console.log("res : ", response)
          if (response === true) {
            localStorage.setItem('isAuthenticated', 'true');
            return true;
          }
          //throw new Error('Invalid credentials');
          return false
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse | Error): Observable<never> {
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
