import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Globe from "../Globe/Globe";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const fetchurl = `http://localhost:4000/api/v1/books`;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const request = await axios.get(fetchurl);
      setBooks(request.data.Books);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [fetchurl]);
  console.log(books);
  const deleteBook = async (ids) => {
    console.log("delete book");
    let deleteId = ids;
    let axiosURL = `http://localhost:4000/api/v1/books`;
    console.log(ids);

    if (
      window.confirm("Are you sure you want to Delete this from your list?")
    ) {
      // Save it!
      console.log("Deleted from database.");
    } else {
      // Do nothing!
      console.log("Cancelled Operation.");
    }

    try {
      await axios.delete(axiosURL, {
        params: { book_id: deleteId },
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="Home">
      <div className="Home__Loader">{isLoading ? <Globe /> : null}</div>
      <div className="Home__grid">
        {books.map((book) => (
          <div className="Home__container" dataset-name={book.book_id}>
            <img
              className="Home__bookImg"
              src={`../../../images/${book.image}.jpg`}
              alt={book.book_name}
            />
            <div className="Home__containerInformation">
              <h3>{book.book_name}</h3>
              <h4>by {book.author}</h4>
              <Moment format="YYYY/MM/DD">{book.publishing_year}</Moment>
              <div className="Home__containerBody">
                <p>{book.summary}</p>
                <p>ISBN: {book.isbn}</p>
              </div>
            </div>
            <div className="Home__containerFooter">
              <Link to={"/update?book_id=" + book.book_id}>
                <button className="Home__containerFooter__Btns" type="button">
                  Update
                </button>
              </Link>

              <button
                className="Home__containerFooter__Btns"
                onClick={(e) => {
                  deleteBook(book.book_id);
                }}
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
