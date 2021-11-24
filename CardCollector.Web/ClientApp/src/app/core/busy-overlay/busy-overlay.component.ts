import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoaderState } from '../models/common.models';
import { BusyOverLayService } from '../services/busy-overlay.service';

@Component({
  selector: 'app-busy-overlay',
  templateUrl: './busy-overlay.component.html',
  styleUrls: ['./busy-overlay.component.css']
})
export class BusyOverlayComponent implements OnInit, OnDestroy {
  public showObservable$: Observable<boolean>;
  private loaderState: LoaderState;
  private subscription: Subscription;
  

  constructor(private busyOverlayService: BusyOverLayService) {
    this.showObservable$ = this.busyOverlayService.loaderStateObservable.pipe(delay(200), map(x => x.displayLoader));
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showLoader(): boolean {
    return this.loaderState && this.loaderState.displayLoader;
  }

}
