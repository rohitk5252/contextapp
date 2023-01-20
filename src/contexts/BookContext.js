import React , { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "The way of Kings", id: 1},
        {title: "The name of the wind", id: 2},
        {title: "The final empire", id: 3},
        {title: "Lord of the rings", id: 4}        
    ]);

    return (
        <BookContext.Provider value={{books, setBooks}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;