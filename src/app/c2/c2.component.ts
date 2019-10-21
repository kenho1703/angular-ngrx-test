import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../reducers';
import { TodoSelectors } from '../selectors';
import { TodoActions } from '../actions';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {

  v1$: Observable<number> = this.store.pipe(select(TodoSelectors.selectV1));
  v2$: Observable<number> = this.store.pipe(select(TodoSelectors.selectV2));

  started = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onStartClicked(): void {
    if (!this.started) {
      this.store.dispatch(TodoActions.change());
      this.started = true;
    }
  }

  onStopClicked() {

  }

  onResetClicked() {

  }

}
