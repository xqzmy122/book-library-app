import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorites: false,
}

const filterSlice = createSlice({
  name: 'filter', // название слайса
  initialState, 
  reducers: { // функции с разными действиями
     setTitleFilter(state, action) {
      // return {...state, title: action.payload}
      
      state.title = action.payload 
      
      // работает корректно благодаря библиотеке immer, которая 
      // формирует новое объект
     },
     setAuthorFilter(state, action) {
      state.author = action.payload
     },
     toggleOnlyFavorites(state) {
      state.onlyFavorites = !state.onlyFavorites
     },
     resetFilter(state) {
      return initialState
     }
  }
})

// при отправке действия filterSlice.actions.setTitleFilter() type формируется 
// автоматически, исходя из названия слайса, а потом через слеш reducer, который 
// был вызван, для того, чтобы передать payload необходимо передать в функцию аргументы

export default filterSlice.reducer // содержит все функции для изменения состояния
export const {setTitleFilter, setAuthorFilter, resetFilter, toggleOnlyFavorites} = filterSlice.actions
export const selectFilterTitle = (state) => state.filter.title
export const selectFilterAuthor = (state) => state.filter.author
export const selectFilterOnlyFavorites = (state) => state.filter.onlyFavorites