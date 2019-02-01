import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReduxState, AppState } from './core/redux/app.state';
import { AddNumber } from './core/redux/test/test.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-template';

  public numbers: Observable<number[]>;

  constructor(private store: Store<AppState>) {
    this.numbers = store.select(ReduxState.test);

    store.dispatch(new AddNumber(4));

    setTimeout(() => {
      store.dispatch(new AddNumber(6));
    }, 5000);
  }


}
