import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ToastPositions } from "../models";

@Injectable()
export class ToastService {
  constructor(private toastr: ToastrService) { }

  showSuccessToast(message: string, position: string = ToastPositions.TopRight, progressBar: boolean = true, closeButton: boolean = true) {
    this.toastr.success(message, 'Success', {
      progressBar: progressBar,
      closeButton: closeButton,
      positionClass: position
    });
  }

  showInfoToast(message: string, position: string = ToastPositions.TopRight, progressBar: boolean = true, closeButton: boolean = true) {
    this.toastr.info(message, 'Info', {
      progressBar: progressBar,
      closeButton: closeButton,
      positionClass: position
    });
  }

  showWarningToast(message: string, position: string = ToastPositions.TopRight, progressBar: boolean = true, closeButton: boolean = true) {
    this.toastr.warning(message, 'Warning', {
      progressBar: progressBar,
      closeButton: closeButton,
      positionClass: position
    });
  }

  showDangerToast(message: string, position: string = ToastPositions.TopRight, progressBar: boolean = true, closeButton: boolean = true) {
    this.toastr.error(message, 'Error', {
      progressBar: progressBar,
      closeButton: closeButton,
      positionClass: position
    });
  }
}