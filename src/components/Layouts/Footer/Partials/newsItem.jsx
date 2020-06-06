import React from "react";
const NewsItem = ({ src, alt, text, date }) => {
  return (
    <li className="container__col__menu item">
      <img src={src} alt={alt} className="imgs" />
      <span>
        {text} <br />
        {date}
      </span>
    </li>
  );
};

export default NewsItem;
