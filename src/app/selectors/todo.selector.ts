import { createSelector } from '@ngrx/store';

import { selectTodoState } from '../reducers';

export const selectV1 = createSelector(
  selectTodoState,
  (state) => state.v1,
);

export const selectV2 = createSelector(
  selectTodoState,
  (state) => state.v2,
);
