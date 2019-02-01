import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { AuthService } from '../authentication/auth.service';
import { ApiCommonMessage } from '../Models/ApiCommonMessage';
import { Enum } from '../enums/common.enums';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptorService {

  private API_URL: string = environment.API_BASE_URL;

  constructor(private loaderService: LoaderService,
    private auth: AuthService,
    private notification: NotificationService,
    private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const requestMessage =
      new ApiCommonMessage(this.auth.GetAuthenticateUserName(),
        this.auth.GetAuthenticateUserName(), req.body);

    const customReq = req.clone({
      body: requestMessage,
      url: this.prepareUrl(req.url),
      headers: req.headers.set('Content-Type', 'application/json')
    });

    this.loaderService.Show();
    return next.handle(customReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {

        }
      }, error => {
        this.CheckAuthValidation(error);
        this.notification.dynamic(error);
      }),
      finalize(() => {
        this.loaderService.Hide();
      }));
  }

  private CheckAuthValidation(error: any) {
    if (error.status === Enum.ErrorCode.UNAUTHENTICATE) {
        this.auth.RemoveToken();
        this.route.navigate(['login']);
    } else if (error.status === Enum.ErrorCode.FORBIDDEN) {
        this.route.navigate(['dashboard/forbidden']);
    }
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : this.API_URL + '/' + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}
