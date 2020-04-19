import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  // const { deleteBook } = useContext(BookContext);

  // Implement reducer
  const { dispatch } = useContext(BookContext);

  return (
    // <li onClick={() => deleteBook(book.id)}>
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
