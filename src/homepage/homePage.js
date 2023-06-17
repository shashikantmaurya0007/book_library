import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fakeFetch } from "../dataBase";
import "../homepage/homePage.css";

const IndividualBook = ({
  id,
  title,
  image,
  writer,
  rating,
  changeCategory,
  category,
}) => (
  <div className="book-card">
    <div className="book-title">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <h4>{writer}</h4>
      <p>{rating}</p>
      <button
        onClick={() =>
          changeCategory(
            { id, title, image, writer, rating, category },
            "Want to read"
          )
        }
      >
        Want to read
      </button>
      <button
        onClick={() =>
          changeCategory(
            { id, title, image, writer, rating, category },
            "Continue Reading"
          )
        }
      >
        Continue Reading
      </button>
      <button
        onClick={() =>
          changeCategory({ id, title, image, writer, rating, category }, "Read")
        }
      >
        Read
      </button>
    </div>
  </div>
);
const HomePage = (props) => {
  const { readbooks, changeCategory } = props;

  // const [readbooks, setReadBooks] = useState([]);

  //   const [wantToReadBooks, setWantToReadBooks] = useState([]);

  // const getData = async () => {
  //     try {
  //         const { status, data } = await fakeFetch("https://example.com/api/books");
  //         if (status === 200) {
  //             const readBooks = data.filter((items) => items.category === "Read");
  //             const continueToRead = data.filter((items) => items.category === "Continue Reading");
  //             const wantToRead = data.filter((items) => items.category === "Want to read");
  //             setReadBooks(readBooks);
  //             setContinueReadBooks(continueToRead);
  //             setWantToReadBooks(wantToRead);
  //         }
  //     } catch (error) {
  //         console.log(error)
  //     }
  // };

  // useEffect(() => {
  //     getData();
  // }, [])
  const continueReadBooks = readbooks?.filter(
    (el) => el.category == "Continue Reading"
  );
  const wantToReadBooks = readbooks?.filter(
    (el) => el.category == "Want to read"
  );
  const read = readbooks?.filter((el) => el.category == "Read");
  return (
    <div>
      <div className="header">
        <div className="header-title">
          <h2 className="txt">Library</h2>
        </div>
        <Link to="/search">
          <span>Search</span>
        </Link>
      </div>
      <div className="category">
        <div className="readbooks">
          <h2 className="book-status">Read Books</h2>
          {read?.map(({ id, title, image, writer, rating, category }) => (
            <IndividualBook
              id={id}
              title={title}
              image={image}
              writer={writer}
              rating={rating}
              category={category}
              changeCategory={changeCategory}
            />
          ))}
        </div>
        <div className="wanttoreadbooks">
          <h2 className="book-status">Want To Read Books</h2>
          {wantToReadBooks.map(
            ({ id, title, image, writer, rating, category }) => (
              <IndividualBook
                id={id}
                title={title}
                image={image}
                writer={writer}
                rating={rating}
                category={category}
                changeCategory={changeCategory}
              />
            )
          )}
        </div>
        <div className="continuetoreadbooks">
          <h2 className="book-status">Continue To Read Books</h2>
          {continueReadBooks.map(
            ({ id, title, image, writer, rating, category }) => (
              <IndividualBook
                id={id}
                title={title}
                image={image}
                writer={writer}
                rating={rating}
                category={category}
                changeCategory={changeCategory}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
