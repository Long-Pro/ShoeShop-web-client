import { configureStore } from '@reduxjs/toolkit'

import user from './slices/user'
import titleReducer from './slices/title'
import isLoginReducer from './slices/isLogin'
import comment from './slices/comment'

export const store = configureStore({
  reducer: {
    user: user,
    title: titleReducer,
    isLogin: isLoginReducer,
    comment,
  },
})

export type StoreKey = keyof typeof store.getState

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
