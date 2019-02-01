import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { test_reducer } from './test/test-reducers';


@NgModule({
  declarations: [
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
        test: test_reducer
    })
  ],
  providers: []
})
export class ReduxModule { }