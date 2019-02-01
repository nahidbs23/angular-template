import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from '../shared/directives/auto-focus.directive';
import { ReduxModule } from './redux/redux.module';

@NgModule({
  imports: [
    CommonModule,
    ReduxModule
  ],
  declarations: [
    AutoFocusDirective
  ],
  exports: [
    AutoFocusDirective,
    ReduxModule
    // JsonViewerComponent
  ],
//   entryComponents: [
//     JsonViewerComponent
//   ]
})
export class CoreModule { }