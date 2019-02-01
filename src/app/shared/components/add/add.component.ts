import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/redux/app.state';
import { AddNumber } from 'src/app/core/redux/test/test.action';
import { TestRepo } from 'src/app/core/base/TestRepo';
import { TestEntity } from 'src/app/core/models/test.model';
import { ApiCommonMessage } from 'src/app/core/Models/ApiCommonMessage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  public NewNumber: number;

  public testList: ApiCommonMessage[] = [];

  constructor(
    private store: Store<AppState>,
    private testRepo: TestRepo) { }

  ngOnInit() {
  }

  public AddNumber(): void {
    this.store.dispatch(new AddNumber(this.NewNumber));
  }

  public async TestApi() {
    await this.testRepo.getByIdAsync(1).then(value => {
      console.log(value);
    });
  }

  public TestApi2() {
    this.testRepo.getById(1).subscribe(value => {
      // this.testList.push(value);
      if (value) {
        this.testList.push(value);
      }
    });
  }

}
