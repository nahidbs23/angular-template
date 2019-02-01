import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Enum } from '../enums/common.enums';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private timeOut = 3000;
  constructor(private toastService: ToastrManager) {
  }

  public success(text: string, title: string = 'Success', timeout?: number) {
    this.toastService.successToastr(text, title, {
      timeOut: this.timeOut
    });
  }

  public warn(text: string, title: string = 'Warning', timeout?: number) {
    this.toastService.warningToastr(text, title, {
      timeOut: this.timeOut
    });
  }

  public error(text: string, title: string = 'Error', timeout?: number) {
    this.toastService.errorToastr(text, title, {
      timeOut: this.timeOut
    });
  }

  public info(text: string, title: string = 'Info', timeout?: number) {
    this.toastService.infoToastr(text, title, {
      timeOut: this.timeOut
    });
  }

  public infoWithoutTimeLimit(text: string, title: string = 'Info') {
    this.toastService.infoToastr(text, title, {
      disableTimeOut: true,
      closeButton: true
    });
  }

  public dynamic(error: any) {
    if (error.status === Enum.ErrorCode.BAD_REQUEST) {
      this.warn(error.error, 'Bad Request');
    }

    if (error.status === Enum.ErrorCode.NOT_FOUND) {
      this.info(error.error, 'Not Found');
    }

    if (error.status === Enum.ErrorCode.INTERNAL_SERVER_ERROR) {
      this.error(error.error, 'Failed');
    }

    if (error.status === Enum.ErrorCode.UNAUTHENTICATE) {
      this.error(error.error, 'Unauthorize');
    }

    if (error.status === Enum.ErrorCode.FORBIDDEN) {
      this.error(error.error, 'Forbidden');
    }
  }
}
