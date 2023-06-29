import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BookshelfContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // useCallback will allow us to use the original fetchBooks function,
  // even after sub-sequential renders. This is used to avoid bugs such as
  // fetchBooks being on an infinite loop of API calls when using useEffect.
  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/bookshelf");

    setBooks(response.data);
  }, []);

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
