import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { BooleanDialogComponent } from './components/boolean-dialog/boolean-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModal,
  ],
  providers: [

  ],
  declarations: [
    BooleanDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModal
  ],
  entryComponents: [
    BooleanDialogComponent
  ]
})
export class SharedModule { }