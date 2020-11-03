import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  genericGet<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  getLocation<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint).pipe(catchError(this.handleError));
  }

  genericPost<T>(endpoint: string, data: any, headers: any): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
    };
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http
      .post<T>(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  genericPut<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, data).pipe(catchError(this.handleError));
  }

  genericDelete<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete<T>(url).pipe(catchError(this.handleError));
  }
}
