import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { selectFilterAuthor, selectFilterTitle} from "../../redux/slices/filterSlice";
import "./BookList.css";

function BookList() {
  const books = useSelector((state) => state.books); // подписываемся на изменения books
  const titleFilter = useSelector(selectFilterTitle)
  const authorFilter = useSelector(selectFilterAuthor)
  const dispatch = useDispatch();

  function onClickHandler(id) {
    dispatch(deleteBook(id));
  }

  function handleToggleFavorite(id) {
    console.log(id);
    dispatch(toggleFavorite(id));
  }

  const filteredBooks = books.filter((book) => {
    return (book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.author.toLowerCase().includes(authorFilter.toLowerCase()))
  })

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {book.title} by <strong>{book.author}</strong>
                </div>

                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button
                    className="book-actions"
                    onClick={() => onClickHandler(book.id)}
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BookList;
