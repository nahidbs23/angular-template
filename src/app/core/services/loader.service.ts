import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    constructor(
        private ngSpinnerService: NgxSpinnerService
    ) {}

    public Show(): void {
        this.ngSpinnerService.show();
    }

    public Hide(): void {
        this.ngSpinnerService.hide();
    }
}