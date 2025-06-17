import React from "react";
// import "./Ex03_ButtonTest.css"; // Importing the CSS file for styling

const Ex03_Button = ({ text, img }) => {
  return (
    <div className="divButton">
      <img src={img} alt="Button Icon" className="img"/>
      <button className="button">{text}</button>
    </div>
  );
};

export default Ex03_Button;
