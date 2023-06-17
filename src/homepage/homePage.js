import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { fakeFetch } from "../dataBase";
import "../homepage/homePage.css";


const HomePage = () => {
    const [readbooks, setReadBooks] = useState([]);
    const [continueReadBooks, setContinueReadBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);

   

    const getData = async () => {
        try {
            const { status, data } = await fakeFetch("https://example.com/api/books");
            if (status === 200) {
                const readBooks = data.filter((items) => items.category === "Read");
                const continueToRead = data.filter((items) => items.category === "Continue Reading");
                const wantToRead = data.filter((items) => items.category === "Want to read");
                setReadBooks(readBooks);
                setContinueReadBooks(continueToRead);
                setWantToReadBooks(wantToRead);
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div className='header'>
            <div className='header-title'>
                <h2 className='txt'>Library</h2>
            </div>
            <Link to= "/search" ><span>Search</span></Link>
        </div>
            <div className='category'>
                <div className='readbooks'>
                <h2 className='book-status'>Read Books</h2>
                {
                    readbooks.map(({ title, image, writer, rating }) =>
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
                    )
                }
                </div>
                <div className='wanttoreadbooks'>
                <h2 className='book-status'>Want To Read Books</h2>
                {
                    wantToReadBooks.map(({ title, image, writer, rating }) =>
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
                    )
                }
                </div>
                <div className='continuetoreadbooks'>
                <h2 className='book-status'>Continue To Read Books</h2>
                {
                    continueReadBooks.map(({ title, image, writer, rating }) =>
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
                    )
                
                }
            </div>
            </div>
        </div>
    )
}
export default HomePage;