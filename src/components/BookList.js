import React, {useEffect, useState} from 'react';
import Book from './Book';
import Axios from 'axios';

function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        Axios.get("https://icefireapi.herokuapp.com/public/listBooks").then((response) => {
            setBooks(response.data.books);
        }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <div>
            {
                books.map(book => (
                    <Book bookId={book.id} title={book.title} author={book.authors[0]} commentCount={book.commentCount} characters={book.characters}/>
                ))
            }
        </div>
    );
}

export default BookList;