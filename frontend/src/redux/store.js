import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import bookReducer from './books/reducer'

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  }
})

export default store