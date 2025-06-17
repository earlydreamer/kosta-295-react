import React from "react";

import Book from "./library/Ex02_Book"; // Importing the Book component
const Library = () => {
  return (
    <>
      <Book bookName = "Book 1" page={123}/>
      <Book bookName = "Book 2" page={456}/>
      <Book page={789}/>
    </>
  );
};

export default Library;
