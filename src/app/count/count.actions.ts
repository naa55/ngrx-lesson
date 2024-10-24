import { createAction, props } from "@ngrx/store";

// export const increment = createAction('[Counter Component Increment]');

// export const decrement = createAction('[Counter Component Decrement]');

// export const reset = createAction('[Counter Component Reset]');

export const increment = createAction('[Counter Component Increment]');

export const decrement = createAction('[Counter Component Decrement]');

export const reset = createAction('[Counter Component Reset]');

export const customIncrement = createAction("custom increment", props<{value: number}>());

export const changeTextName = createAction("change text", props<{text: string}>());

