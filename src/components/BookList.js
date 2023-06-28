import { useContext } from "react";
import BookshelfContext from "../context/bookshelf";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BookshelfContext);

  // Check if books is undefined or null
  if (!books) {
    return <div>Loading...</div>;
  }

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
