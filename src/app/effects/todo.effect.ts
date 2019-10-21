import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, concatMap, delay } from 'rxjs/operators';

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
      map(() => {
        return TodoActions.decrease();
      })
    )
  );

  decrease2$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TodoActions.change),
    delay(500),
    map(() => {
      return TodoActions.decrease();
    })
  )
);

  constructor(
    private actions$: Actions
  ) { }
}
