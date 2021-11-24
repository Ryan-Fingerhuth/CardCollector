import { Component, OnInit } from '@angular/core';
import { IBooleanDialogProperties } from '@core/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boolean-dialog',
  templateUrl: './boolean-dialog.component.html',
  styleUrls: ['./boolean-dialog.component.css']
})
export class BooleanDialogComponent implements OnInit {
  public properties: IBooleanDialogProperties;

  constructor(public activeModal: NgbActiveModal) {
    this.properties = {
      dialogType: 'Info',
      header: 'Confirm',
      message: 'Are you sure?',
      okText: 'Confirm',
      cancelText: 'Cancel',
      headerCss: '',
      okCss: ''
    }
  }

  ngOnInit() {
  }

  public configureFor(dialogType: 'Danger' | 'Info' | 'Warn' | 'Success' | 'Primary' | 'Secondary') {
    switch (dialogType) {
      case 'Danger':
        this.properties.header = 'Danger';
        this.properties.headerCss = 'bg-modal-danger';
        this.properties.okCss = 'btn-danger';
      case 'Warn':
        this.properties.header = 'Warning';
        this.properties.headerCss = '';
        this.properties.okCss = 'btn-warning';
      case 'Success':
        this.properties.header = 'Success';
        this.properties.headerCss = '';
        this.properties.okCss = 'btn-success';
      case 'Info':
        this.properties.header = 'Info';
        this.properties.headerCss = '';
        this.properties.okCss = 'btn-primary';
    }
  }

  public onOk(): void {
    this.activeModal.close(true);
  }

  public onCancel(): void {
    this.activeModal.close(false);
  }

}
