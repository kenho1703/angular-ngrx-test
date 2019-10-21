import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { merge, timer } from 'rxjs';
import { map, delay, switchMap } from 'rxjs/operators';

import { TodoActions } from '../actions';

@Injectable()
export class TodoEffect {

  increase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      delay(500),
      map(() => TodoActions.increase())
    )
  );

  decrease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      switchMap(() => merge(timer(0), timer(500))),
      map(() => {
        return TodoActions.decrease();
      })
    )
  );

  constructor(
    private actions$: Actions
  ) { }
}
