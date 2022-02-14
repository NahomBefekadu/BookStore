import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img
          className="Header__logoImg"
          src={
            "https://media.wired.com/photos/5be4cd03db23f3775e466767/master/pass/books-521812297.jpg"
          }
          alt="Logo"
        />
        <span>SleepyBooks</span>
      </div>
      <Link to="/create" style={{ textDecoration: "none" }}>
        <button className="Header__create_btn">Create</button>
      </Link>
    </div>
  );
}
