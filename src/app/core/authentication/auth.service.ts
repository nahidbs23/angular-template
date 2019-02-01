import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AppConstant } from '../constant/app.constant';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private router: Router,
    ) { }


    public IsAuthenticate(): boolean {
        if (this.tokenService.GetToken()) {
            return !this.tokenService.isTokenExpired();
        } else {
            return false;
        }
    }

    public GetAuthenticateUserName(): string {
        if (this.tokenService.GetToken()) {
            return this.tokenService.GetTokenValue(AppConstant.TokenConstant.Name);
          }
          return '';
    }

    public RemoveToken() {
        this.tokenService.RemoveToken();
    }
}
