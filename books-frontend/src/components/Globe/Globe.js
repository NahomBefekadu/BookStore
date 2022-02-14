import React from "react";
import "./Globe.css";

function Globe() {
  return (
    <div className="globe">
      <div className="globe___container">
        <div className="circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2 className="globe__text">Loading ...</h2>
      </div>
    </div>
  );
}

export default Globe;
