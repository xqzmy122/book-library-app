import { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { fetchBook } from "../../redux/slices/bookSlice";
import { addBook } from "../../redux/slices/bookSlice";
import booksData from "../../data/books.json";
import { createBookWithId } from "../../utils/createBookWithId";
import { setError } from "../../redux/slices/errorSlice";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  function handleRandomBook() {
    const randomId = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomId];
    dispatch(addBook(createBookWithId(randomBook, 'random')));
  }
  
  function handleRandomBookViaAPI() {
    dispatch(fetchBook())  
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')));

      setTitle("");
      setAuthor("");
    }
    else {
      dispatch(setError('Fill title and author fields!'))
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Book Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleRandomBook}>
          Add random
        </button>
        <button type="button" onClick={handleRandomBookViaAPI}>
          Add random via API
        </button>
      </form>
    </div>
  );
}

export default BookForm;
