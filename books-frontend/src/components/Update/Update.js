import React, { useEffect, useState } from "react";
import "./Update.css";
import axios from "axios";
import Moment from "react-moment";
import { Link, useSearchParams } from "react-router-dom";
import Globe from "../Globe/Globe";
export default function Update() {
  const [isLoading, setIsLoading] = useState(false);
  const [bkname, setName] = useState();
  const [summary, setSummary] = useState();
  const [author, setAuthor] = useState();
  const [isbn, setIsbn] = useState();
  const [bkyear, setYear] = useState();
  const [genre, setGenre] = useState();
  const [book, setBook] = useState();
  let [searchParams, setSearchParams] = useSearchParams();

  //console.log(searchParams.get("book_id"));
  let updateID = searchParams.get("book_id");

  const fetchurl = `http://localhost:4000/api/v1/book`;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const request = await axios.get(fetchurl, {
        params: { book_id: updateID },
      });
      setBook(request.data.Book);
      setIsLoading(false);
      console.log(request.data.Book);
      return request;
    }
    fetchData();
  }, []);
  const update = async (e) => {
    console.log("updated book");
    let axiosURL = `http://localhost:4000/api/v1/book`;
    const dataObj = {
      book_name2: bkname,
      summary2: summary,
      author2: author,
      isbn2: isbn,
      publishing_year2: bkyear,
      genre2: genre,
    };
    let jsObj = JSON.stringify(dataObj);
    try {
      await axios.put(axiosURL, jsObj, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
        params: { book_id: updateID },
      });
      console.log(dataObj);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
    document.getElementById("myForm").reset();
  };

  console.log(book);
  let temp = book;

  return (
    <div className="Update">
      <div className="Home__Loader">{isLoading ? <Globe /> : null}</div>

      {isLoading ? (
        <Globe />
      ) : (
        <form className="Create__bookForm" id="myForm">
          <input
            type="text"
            name="book_name"
            placeholder={book ? book.book_name : null}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="summary"
            placeholder={book ? book.summary : null}
            onChange={(e) => setSummary(e.target.value)}
          />
          <input
            type="text"
            name="author"
            placeholder={book ? book.author : null}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            name="isbn"
            placeholder={book ? book.isbn : null}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <input
            type="text"
            name="publishing_year"
            placeholder={book ? book.publishing_year : null}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            name="genre"
            placeholder={book ? book.genre : null}
            onChange={(e) => setGenre(e.target.value)}
          />
          <div className="Create__bookForm_btns">
            <button
              className="Create__bookForm_btn"
              type="button"
              onClick={(e) => {
                update(e);
              }}
            >
              Save
            </button>
            <Link to="/">
              <button className="Create__bookForm_btn">Cancel</button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
