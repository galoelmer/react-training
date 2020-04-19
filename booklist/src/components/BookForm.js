import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // const { addBook } = useContext(BookContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addBook(title, author);
  //   setTitle("");
  //   setAuthor("");
  // };

  // Implement reducer
  const { dispatch } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: { title, author },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="Submit" value="Add Book" readOnly />
    </form>
  );
};

export default BookForm;
