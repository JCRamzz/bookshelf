import { createContext, useState } from "react";
import axios from "axios";

const BookshelfContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/bookshelf");

    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/bookshelf", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(
      `http://localhost:3001/bookshelf/${id}`
    );

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/bookshelf/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BookshelfContext.Provider value={valueToShare}>
      {children}
    </BookshelfContext.Provider>
  );
}

export { Provider };
export default BookshelfContext;
