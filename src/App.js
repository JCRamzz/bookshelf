import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookshelfContext from "./context/bookshelf";

function App() {
  const { fetchBooks } = useContext(BookshelfContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>My Bookshelf</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
