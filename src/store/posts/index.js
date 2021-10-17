import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()) 
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'pending'
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed'
    }
  }
})

export default postsSlice.reducer