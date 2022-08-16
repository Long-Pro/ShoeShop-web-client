import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice'
import commentReducer from '../features/comment/commentSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    comment: commentReducer,
  },
})

export type StoreKey = keyof typeof store.getState

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
