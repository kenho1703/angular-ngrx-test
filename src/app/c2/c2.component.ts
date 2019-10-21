import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, interval, BehaviorSubject } from 'rxjs';

import { AppState } from '../reducers';
import { TodoSelectors } from '../selectors';
import { TodoActions } from '../actions';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {

  v1$: Observable<number> = this.store.pipe(select(TodoSelectors.selectV1));
  v2$: Observable<number> = this.store.pipe(select(TodoSelectors.selectV2));

  started = false;
  a: BehaviorSubject<boolean>;
  stopped$ = new Subject();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onStartClicked(): void {
    if (this.started) {
      return;
    }

    this.a = new BehaviorSubject(true);
    this.stopped$ = new Subject();
    this.a.next(true);

    this.a.pipe(
      switchMap(() => interval(1000)),
      takeUntil(this.stopped$)
    ).subscribe(() => {
      this.store.dispatch(TodoActions.change());
      this.started = true;
    });
  }

  onStopClicked() {
    this.stopped$.next();
    this.stopped$.complete();
    this.started = false;
  }

  onResetClicked() {
    this.store.dispatch(TodoActions.reset());
  }

}
