import BookShow from "./BookShow";
import useBookshelfContext from "../hooks/use-bookshelf-context";

function BookList() {
  const { books } = useBookshelfContext();

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
