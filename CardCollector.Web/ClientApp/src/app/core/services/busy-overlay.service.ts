import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoaderState } from "../models/common.models";

@Injectable({
  providedIn: 'root'
})
export class BusyOverLayService {
  private requestCount = 0;
  private currentLoaderId: number;
  private currentLoaders: LoaderState[] = [];
  private loaderSubject = new Subject<LoaderState>();
  public loaderStateObservable = this.loaderSubject.asObservable();
  public stat: LoaderState;

  constructor() {
    this.currentLoaderId = Math.floor(Math.random() * 100);
  }

  public showLoadingScreen() {
    this.requestCount = this.requestCount + 1;
    const currentLoader = this.currentLoaders.find(x => x.loaderId === this.currentLoaderId);
    if (!currentLoader) {
      const state = { displayLoader: true, isLoading: true, loaderId: this.currentLoaderId } as LoaderState;
      this.currentLoaders.push(state);
      this.loaderSubject.next(state);
    }
  }

  public hideLoadingScreen() {
    this.requestCount = this.requestCount - 1;
    if (this.requestCount <= 0) {
      this.currentLoaders.splice(0, 1);
      this.loaderSubject.next({ displayLoader: false, isLoading: false, loaderId: this.currentLoaderId} as LoaderState);
    }
  }
}
