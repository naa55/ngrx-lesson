import { Post } from "../../models/post.model"

export interface PostsState {
    posts: Post[]
}


export const intialState: PostsState = {
    posts: [
       { id: 1, title: "Sample Title 1", description: "Sample Description"},
       { id: 2, title: "Sample Title 1", description: "Sample Description"}
    ]
}