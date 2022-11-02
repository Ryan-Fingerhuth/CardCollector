import { HttpClient, HttpParams } from "@angular/common/http";
import { ErrorHandler, Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ApiService {
  private apiUrl: string;

  constructor(
    public http: HttpClient,
    private errorHandler: ErrorHandler,
    @Inject('BASE_URL') baseUrl: string) {
      this.apiUrl = baseUrl;
  }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get<T>(this.path(url), { params })
      .pipe(catchError((e) => this.formatErrors(e)));
  }

  post<T>(url: string, body: T): Observable<any> {
    return this.http.post<T>(this.path(url), body)
      .pipe(catchError((e) => this.formatErrors(e)));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.path(url))
      .pipe(catchError((e) => this.formatErrors(e)));
  }

  file(url: string): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' };
    return this.http.get<Blob>(this.path(url), options)
      .pipe(catchError((e) => this.formatErrors(e)));
  }

  public path(url: string): string {
    return `${this.apiUrl}${url}`;
  }

  protected formatErrors(error: any) {
    this.errorHandler.handleError(error);
    return throwError(error.error);
  }
}