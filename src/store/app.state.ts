import { counterReducer, CounterState } from "../app/count/count.reducer";
import { postsReducer } from "../app/post/state/post.reducer";
import { PostsState } from "../app/post/state/post.state";

export interface AppState {
    count: CounterState,
    posts: PostsState
}

export const appReducer = {
    count: counterReducer,
    posts: postsReducer
}