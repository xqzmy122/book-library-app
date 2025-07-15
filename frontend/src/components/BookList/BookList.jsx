import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/slices/bookSlice";
import { selectFilterAuthor, selectFilterTitle, selectFilterOnlyFavorites} from "../../redux/slices/filterSlice";
import "./BookList.css";

function BookList() {
  const books = useSelector((state) => state.books); // подписываемся на изменения books
  const titleFilter = useSelector(selectFilterTitle)
  const authorFilter = useSelector(selectFilterAuthor)
  const onlyFavorites = useSelector(selectFilterOnlyFavorites)
  const dispatch = useDispatch();

  function onClickHandler(id) {
    dispatch(deleteBook(id));
  }

  function handleToggleFavorite(id) {
    dispatch(toggleFavorite(id))
  }

  function highlightMatch(text, filter) {
    if(!filter) text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, i) => {
      if(substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span className="highlight" key={i}>{substring}</span>
        )
      }

      return substring
    })
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase())
    const matchesFavorites = onlyFavorites ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFavorites
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
                  {++i}. {highlightMatch(book.title, titleFilter)} by <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.source})
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
