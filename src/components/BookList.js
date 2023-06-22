import { useContext } from "react";
import BookshelfContext from "../context/bookshelf";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BookshelfContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {value}
      {renderedBooks}
    </div>
  );
}

export default BookList;
