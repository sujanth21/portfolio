import React from "react";
import "./Header.css";

const Header = ({ name, title, summary }) => {
  return (
    <div className='header'>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
