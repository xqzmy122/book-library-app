import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    toggleLoading(state) {
      return !state
    }
  }
})

export default loadingSlice.reducer
export const {toggleLoading} = loadingSlice.actions
export const selectLoading = (state) => state.loading
