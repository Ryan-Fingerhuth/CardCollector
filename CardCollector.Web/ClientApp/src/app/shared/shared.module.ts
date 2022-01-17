import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BooleanDialogComponent } from './components/boolean-dialog/boolean-dialog.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
  ],
  providers: [],
  declarations: [
    BooleanDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule
  ],
  entryComponents: [
    BooleanDialogComponent
  ]
})
export class SharedModule { }
