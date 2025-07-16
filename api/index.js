const express = require("express");
const cors = require("cors");
const booksData = require("./data/books.json");

const app = express();

app.use(cors());

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

app.get("/random-book", (req, res) => {
  getRandomBook();
  res.json(randomBook);
});

app.get("/random-book-delayed", (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 2000);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
