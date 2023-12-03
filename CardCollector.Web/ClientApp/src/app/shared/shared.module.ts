import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";

import { BooleanDialogComponent } from "./components/boolean-dialog/boolean-dialog.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    CarouselModule,
    ButtonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  declarations: [BooleanDialogComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    CarouselModule,
    ButtonModule,
    ToastrModule,
  ],
  entryComponents: [BooleanDialogComponent],
})
export class SharedModule {}
