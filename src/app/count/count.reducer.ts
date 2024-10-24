import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, customIncrement, changeTextName } from './count.actions';

export interface CounterState {
  count: number;
  text: string;
}

export const initialState = {
  count: 0,
  text: "Author"
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count - 1
  })),
  on(reset, (state) => ({
    ...state,
    count: 0
  })),
  on(customIncrement, (state, { value }) => ({
    ...state,
    count: state.count + value
  })),
  on(changeTextName, (state, {text}) => ({
    ...state,
    text
  }))
);
