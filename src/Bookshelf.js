import Book from "./Book";
import propTypes from "prop-types";

const Bookshelf = ({ books, shelf, moveHandle }) => {
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key);
  console.log(booksOnShelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={shelf.key}
              moveHandle={moveHandle}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};


Bookshelf.propTypes = {
    books: propTypes.array.isRequired,
    shelf: propTypes.object.isRequired,
    moveHandle: propTypes.func.isRequired,
  };

  
export default Bookshelf;

