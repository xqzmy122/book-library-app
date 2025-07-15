import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import bookSlice from './slices/bookSlice'

const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterReducer,
  }
})

export default store