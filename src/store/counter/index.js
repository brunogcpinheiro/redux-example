import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'

export const counterReducer = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state, action) => {
      state.loading = Number(action.payload)
    },
    increment: (state, action) => {
      state.counter += Number(action.payload)
    },
    decrement: (state, action) => {
      state.counter -= Number(action.payload)
    }
  }
})

export const { increment, decrement, loading } = counterReducer.actions

export const incrementAsync = amount => dispatch => {
  dispatch(loading(true))
  setTimeout(() => {
    dispatch(increment(amount))
    dispatch(loading(false))
  }, 1000)
}

export default counterReducer.reducer