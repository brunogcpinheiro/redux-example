import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import postsSlice from './posts'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice
  }
}) 