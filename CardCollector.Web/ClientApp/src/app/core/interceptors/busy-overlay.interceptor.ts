import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { BusyOverLayService } from "../services/busy-overlay.service";

@Injectable({
  providedIn: 'root'
})
export class BusyOverLayInterceptor implements HttpInterceptor {

  constructor(private loaderService: BusyOverLayService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showloader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    }, (err) => {
      this.onEnd();
    }))
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showloader(): void {
    this.loaderService.showLoadingScreen();
  }

  private hideLoader(): void {
    this.loaderService.hideLoadingScreen();
  }
}