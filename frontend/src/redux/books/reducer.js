import * as actions from './actionTypes.js'
const initialState = []

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [...state, action.payload]
    case actions.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case actions.TOGGLE_FAVORITE:
      return state.map((book) => {
        return book.id === action.payload ? {...book, isFavorite: !book.isFavorite} : book
      })
    default:
      return state
  }
  
}

export default bookReducer