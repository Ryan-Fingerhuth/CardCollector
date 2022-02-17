
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { SafePipe } from "./pipes/safe.pipe";
import { BusyOverlayComponent } from "./busy-overlay/busy-overlay.component";
import { BusyOverLayInterceptor } from "./interceptors/busy-overlay.interceptor";
import { 
  ApiService,
  BusyOverLayService,
  CardService,
  ToastService
} from "./services";


@NgModule({
  declarations: [BusyOverlayComponent, SafePipe],
  imports: [
    CommonModule,
    ToastrModule
  ],
  exports: [BusyOverlayComponent, SafePipe],
  entryComponents: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BusyOverLayInterceptor, multi: true },
    BusyOverLayService,
    ApiService,
    CardService,
    ToastService
  ]
})
export class CoreModule { }