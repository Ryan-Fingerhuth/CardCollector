import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BooleanDialogComponent } from './components/boolean-dialog/boolean-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  declarations: [
    BooleanDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    BooleanDialogComponent
  ]
})
export class SharedModule { }
