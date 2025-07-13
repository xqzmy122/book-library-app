import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

function BookList() {
  const books = useSelector((state) => state.books) // подписываемся на изменения books
  const dispatch = useDispatch()

  function onClickHandler(id) {
    dispatch(deleteBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (<p>No books available</p>) : <ul>
      {books.map((book, i) => {
        return (
          <li key={book.id}>
            <div className='book-info'>{++i}. {book.title} by <strong>{book.author}</strong></div>
            <button className='book-actions' onClick={() => onClickHandler(book.id)}>delete</button>
          </li>
        )
      })}  
      </ul>}  
    </div>
  )
}

export default BookList