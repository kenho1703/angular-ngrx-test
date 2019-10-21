import { createReducer, on } from '@ngrx/store';

import { TodoActions } from '../actions';

export interface State {
  v1: number;
  v2: number;
}

export const initialState: State = {
  v1: -5,
  v2: 10
};

export const reducer = createReducer(
  initialState,

  on(
    TodoActions.increase,
    (state) => ({ ...state, v1: state.v1 + 1 })
  ),

  on(
    TodoActions.decrease,
    (state) => ({ ...state, v2: state.v2 - 1 })
  ),

  on(
    TodoActions.reset,
    () => (initialState)
  ),
);
