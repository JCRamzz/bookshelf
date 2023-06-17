import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import BookshelfContext from "./context/bookshelf";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BookshelfContext.Provider value={5}>
    <App />
  </BookshelfContext.Provider>
);
