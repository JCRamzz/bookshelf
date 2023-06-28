import { createContext, useState } from "react";

const BookshelfContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BookshelfContext.Provider value={valueToShare}>
      {children}
    </BookshelfContext.Provider>
  );
}

export { Provider };
export default BookshelfContext;
