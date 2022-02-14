import React, { useEffect, useState } from "react";
import "./Create.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Create() {
  const [name, setName] = useState();
  const [summary, setSummary] = useState();
  const [author, setAuthor] = useState();
  const [isbn, setIsbn] = useState();
  const [bkyear, setYear] = useState();
  const [genre, setGenre] = useState();
  console.log(name);
  const create = async (e) => {
    console.log("Create book");
    let axiosURL = `http://localhost:4000/api/v1/books`;
    console.log(bkyear);
    //const publYear = moment(bkyear, "YYYY/MM/DD");

    const dataObj = {
      book_name: name,
      summary: summary,
      author: author,
      isbn: isbn,
      publishing_year: bkyear,
      genre: genre,
    };
    let jsObj = JSON.stringify(dataObj);
    try {
      await axios.post(axiosURL, jsObj, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
      console.log(dataObj);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
    document.getElementById("myForm").reset();
  };

  return (
    <div className="Create">
      <form className="Create__bookForm" id="myForm">
        <input
          type="text"
          name="book_name"
          placeholder="Book Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary"
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          type="text"
          name="publishing_year"
          placeholder="Publishing Year"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <div className="Create__bookForm_btns">
          <button
            className="Create__bookForm_btn"
            type="button"
            onClick={(e) => {
              create(e);
            }}
          >
            Save
          </button>
          <Link to="/">
            <button className="Create__bookForm_btn">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
