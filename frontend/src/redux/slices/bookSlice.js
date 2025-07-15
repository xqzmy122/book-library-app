import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { createBookWithId } from "../../utils/createBookWithId";

const initialState = []

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      return [...state, action.payload]
    },
    deleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite(state, action) {
      return state.map((book) => {
        return book.id === action.payload ? {...book, isFavorite: !book.isFavorite} : book
      })
    },
  }
})

export default bookSlice.reducer

export const thunkFunction = async (dispatch, getState) => {
  try {
        const res = await axios.get("http://localhost:3000/random-book");
  
        if (res?.data?.title && res?.data?.author) {
          dispatch(addBook(createBookWithId(res.data, 'API')));
        }
      } catch (error) {
        console.log("Error while fetchin", error);
      }
}

export const {addBook, deleteBook, toggleFavorite} = bookSlice.actions
export const selectBooks = (state) => state.books