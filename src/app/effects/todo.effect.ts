import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { TodoActions } from '../actions';
import { Observable, interval, Subject, of } from 'rxjs';

@Injectable()
export class TodoEffect {

  // timer = new Subject();

  // timer$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodoActions.change),
  //     tap(() => {
  //       interval(1000).pip;
  //     })
  //   )
  //   , { dispatch: false }
  // );

  increase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      map(() => TodoActions.increase())
    )
  );

  decrease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      map(() => {
        return TodoActions.decrease();
      })
    )
  );

  // stop = createEffect(() => this.actions$.pipe(
  //   ofType(TodoActions.stop),
  //   tap(() => {
  //     this.timer.complete();
  //   })
  // ));

  constructor(
    private actions$: Actions
  ) { }
}
