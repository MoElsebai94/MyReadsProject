import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ books, moveHandle }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} shelf="none" />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
