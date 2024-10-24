import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./count.reducer";

const getCounterState = createFeatureSelector<CounterState>('count');

export const getCounter = createSelector(getCounterState, state => {
    return state.count;
});

export const getTextName = createSelector(getCounterState, state => {
    return state.text
})

