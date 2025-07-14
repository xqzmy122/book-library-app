import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: ''
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
     resetFilter(state) {
      return initialState
     }
  }
})

// при отправке действия filterSlice.actions.setTitleFilter() type формируется 
// автоматически, исходя из названия слайса, а потом через слеш reducer, который 
// был вызван, для того, чтобы передать payload необходимо передать в функцию аргументы

export default filterSlice.reducer // содержит все функции для изменения состояния
export const {setTitleFilter, resetFilter} = filterSlice.actions
export const selectFilterTitle = (state) => state.filter.title