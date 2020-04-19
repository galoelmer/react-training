// eslint-disable-next-line
import React, { createContext, useState, useReducer, useEffect } from "react";
import { bookReducer } from "../reducer/bookReducer";
// import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "Lord of the rings", author: "J.R.R Tolkien", id: 1 },
  //   { title: "Lord of the rings 2", author: "J.R.R Tolkien", id: 2 },
  //   { title: "Lord of the rings 3", author: "J.R.R Tolkien", id: 3 },
  // ]);
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const deleteBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  // Implement useReducer
  const [books, dispatch] = useReducer(bookReducer, [], () => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
  });

  useEffect (() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    // <BookContext.Provider value={{ books, addBook, deleteBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
