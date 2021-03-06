import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import propTypes from "prop-types";

const ListBooks = ({ bookshelves, books, moveHandle }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <Bookshelf
              key={shelf.key}
              books={books}
              shelf={shelf}
              moveHandle={moveHandle}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button className="open-search">Add a Book</button>
        </Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  bookshelves: propTypes.array.isRequired,
  books: propTypes.array.isRequired,
  moveHandle: propTypes.func.isRequired,
};

export default ListBooks;
