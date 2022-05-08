import { Link } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = ({ moveHandle }) => {
  const [query, setQuery] = useState("");
  const [booksFound, setBooksFound] = useState([]);

  const deleteQuery = () => setBooksFound([]);

  const showingBooks = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery) {
      BooksAPI.search(newQuery, 20).then((books) => {
        books.length > 0 ? setBooksFound(books) : setBooksFound([]);
      });
    } else {
      setBooksFound([]);
      setQuery("");
    }
  };

  /* const showingBooks =
    query === ""
      ? !books
      : books.filter(
          (b) =>
            b.title.toLowerCase().includes(query.toLowerCase()) ||
            b.authors.join(", ").toLowerCase().includes(query.toLowerCase())
        );

        */

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={deleteQuery}>
            Close
          </button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => showingBooks(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksFound.length
            ? booksFound.map((book) => (
                <Book key={book.id} book={book} moveHandle={moveHandle} />
              ))
            : "Please search/Check your keywords"}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
