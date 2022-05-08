const Book = ({ book, shelf, moveHandle}) => {
  const bookThumbnail =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "Image not Available";

  const bookTitle = book.title ? book.title : "Unknown title";

  const bookAuthor = book.authors
    ? Array.isArray(book.authors)
      ? book.authors.join(", ")
      : "Unknown author"
    : "Unknown author";



  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookThumbnail})`,
            }}
          ></div>

          <div className="book-shelf-changer">
            <select
              value={shelf ? shelf : 'none'}
              onChange={(e) => moveHandle(book, e.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthor}</div>
      </div>
    </li>
  );
};

export default Book;
