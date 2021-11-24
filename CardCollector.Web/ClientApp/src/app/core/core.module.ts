
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BusyOverlayComponent } from "./busy-overlay/busy-overlay.component";
import { BusyOverLayInterceptor } from "./interceptors/busy-overlay.interceptor";
import { 
  ApiService,
  BusyOverLayService,
  CardService
} from "./services";


@NgModule({
  declarations: [BusyOverlayComponent],
  imports: [CommonModule],
  exports: [BusyOverlayComponent],
  entryComponents: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BusyOverLayInterceptor, multi: true },
    BusyOverLayService,
    ApiService,
    CardService,
  ]
})
export class CoreModule { }