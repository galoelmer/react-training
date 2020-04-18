import React, {createContext, useState} from 'react';
import {v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Lord of the rings", author: "J.R.R Tolkien", id: 1},
        {title: "Lord of the rings 2", author: "J.R.R Tolkien", id: 2},
        {title: "Lord of the rings 3", author: "J.R.R Tolkien", id: 3}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    }
    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return ( 
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;