import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BooleanDialogComponent } from './components/boolean-dialog/boolean-dialog.component';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    MatInputModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  declarations: [
    BooleanDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    ToastrModule,
    MatInputModule
  ],
  entryComponents: [
    BooleanDialogComponent
  ]
})
export class SharedModule { }
