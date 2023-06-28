import { useContext } from "react";
import BookshelfContext from "../context/bookshelf";

function useBookshelfContext() {
  return useContext(BookshelfContext);
}

export default useBookshelfContext;
