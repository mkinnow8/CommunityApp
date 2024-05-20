import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/UserSlice'
import FontReducer from './slices/FontSlice'

const store = configureStore({
    reducer: {
        user: UserReducer,
        font: FontReducer,
    }
})



export {store}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;