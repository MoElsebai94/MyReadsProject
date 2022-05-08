import { Link } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";

const SearchBooks = ({ books, moveHandle }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
  };

  const deleteQuery = () => updateQuery("");

  const showingBooks =
    query === ""
      ? !books
      : books.filter(
          (b) =>
            b.title.toLowerCase().includes(query.toLowerCase()) ||
            b.authors.join(", ").toLowerCase().includes(query.toLowerCase())
        );

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
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.length
            ? showingBooks.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  moveHandle={moveHandle}
                  shelf={book.shelf}
                />
              ))
            : "Please search/Check your keywords"}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
