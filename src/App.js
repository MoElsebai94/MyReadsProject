import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  const bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const changeBookShelf = (book, shelf) => {
    const update = async () => {
      const res = await BooksAPI.update(book, shelf);
      console.log(res);
    };
    book.shelf = shelf;
    setBooks(books.filter((b) => b.id !== book.id).concat(book));

    update(books);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks
              bookshelves={bookshelves}
              books={books}
              moveHandle={changeBookShelf}
            />
          }
        />
        <Route
          path="/search"
          element={<SearchBooks books={books} moveHandle={changeBookShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
