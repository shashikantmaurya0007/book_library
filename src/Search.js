import React from 'react';
import { useState,useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

import { fakeFetch } from "./dataBase";
import "./search.css";

const Search = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const getData = async () => {
        try {
            const { status, data } = await fakeFetch("https://example.com/api/books");
            if (status === 200) {
                setBooks(data);
            }
        } catch (error) {
            console.log(error)
        }
    };
    console.log(books)
    const getFilteredBooks = (query, books) => {
        if(!query){
            return books;
        }
        return books.filter(name => name.title.includes(query.toLowerCase()));
    }
    const filteredBooks = getFilteredBooks(query, books);

    useEffect(() => {
        getData();
    }, [])
  return (
    <div>
        <div className='search-bar'>
                <div className='search-input'>
                    <input type='text' className='input-field' placeholder='search..!' onChange= {event => setQuery(event.target.value)} />
                    <div className='search-icon'>
                    <BsSearch />
                    </div>
                </div>
            </div>
            {
                filteredBooks.map(({ title, image, writer, rating })=> 
                <div>
                  <div className='main'>
                        <div className='book-card'>
                            <div className='book-title'>
                                <div className='image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h4>{writer}</h4>
                                <p>{rating}</p>
                            </div>
                        </div>
                        </div>
                </div>
                )
            }
    </div>
  )
}

export default Search;