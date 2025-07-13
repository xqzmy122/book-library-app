import * as actions from './actionTypes.js'

export function addBook(newBook) {
  return {
    type: actions.ADD_BOOK,
    payload: newBook,
  }
}

export function deleteBook(id) {
  return {
    type: actions.DELETE_BOOK,
    payload: id,
  }
}

export function toggleFavorite(id) {
  return {
    type: actions.TOGGLE_FAVORITE,
    payload: id
  }
}