import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTodo from './todo.reducer';

export interface AppState {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodo.reducer
};

export const selectTodoState = createFeatureSelector<fromTodo.State>('todo');
