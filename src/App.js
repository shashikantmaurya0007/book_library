import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { fakeFetch } from "./dataBase";

import "./App.css";
import HomePage from "./homepage/homePage";
import Search from "./Search";
function App() {
  const [readbooks, setReadBooks] = useState([]);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        const readBooks = data;
        const continueToRead = data.filter(
          (items) => items.category === "Continue Reading"
        );
        const wantToRead = data.filter(
          (items) => items.category === "Want to read"
        );
        setReadBooks(readBooks);
        // setContinueReadBooks(continueToRead);
        // setWantToReadBooks(wantToRead);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const changeCategory = (obj, categoryName) => {
    const newFilteredData = readbooks?.map((book) => {
      if (book.id == obj.id) {
        return { ...book, category: categoryName };
      } else {
        return book;
      }
    });
    setReadBooks((prev) => newFilteredData);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage readbooks={readbooks} changeCategory={changeCategory} />
            }
          ></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
