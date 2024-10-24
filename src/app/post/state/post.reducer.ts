import { createReducer } from "@ngrx/store";
import { intialState } from "./post.state";

const _postsReducer = createReducer(intialState)


export function postsReducer(state:any, action:any) {
  return _postsReducer(state, action)
}