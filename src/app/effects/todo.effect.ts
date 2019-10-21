import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, delay } from 'rxjs/operators';

import { TodoActions } from '../actions';
import { from } from 'rxjs';

@Injectable()
export class TodoEffect {

  increase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      map(() => TodoActions.increase())
    )
  );

  decrease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.change),
      switchMap(() => from([0, 1]).pipe(
        delay(1000),
        map(() => {
          return TodoActions.decrease();
        })
      )),
    )
  );

  constructor(
    private actions$: Actions
  ) { }
}
