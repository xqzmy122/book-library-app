import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createBookWithId } from "../../utils/createBookWithId";
import { setError } from "./errorSlice";

const initialState = [];

export const fetchBook = createAsyncThunk(
  "books/fetchBook", // название действия
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error // выкидаваем ошибку для отклонения промиса
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      return [...state, action.payload];
    },
    deleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite(state, action) {
      return state.map((book) => {
        return book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book;
      });
    },
  },
  extraReducers: (builder) => {
    // если fulfilled, то вызывается колбэк функция

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action?.payload?.author && action?.payload?.title) {
        state.push(createBookWithId(action.payload, "API"));
      }
    });
  },
});

export default bookSlice.reducer;
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;
export const selectBooks = (state) => state.books;
