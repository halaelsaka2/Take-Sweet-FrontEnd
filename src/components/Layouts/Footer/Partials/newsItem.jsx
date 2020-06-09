import React from "react";
const NewsItem = ({ src, alt, text, date }) => {
  return (
    <li className="container__col__menu item">
      <img src={src} alt={alt} className="imgs" />
      <span>
        <div>{text}</div>
        <div>{date}</div>
      </span>
    </li>
  );
};

export default NewsItem;
