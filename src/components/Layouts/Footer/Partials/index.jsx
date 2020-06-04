import React from "react";
import NewsItem from "./newsItem";
const NewsList = ({ newsList }) => {
  return (
    <ul className="container__col__menu grid">
      {newsList.map((item) => (
        <NewsItem
          src={item.src}
          alt={item.alt}
          text={item.text}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default NewsList;
