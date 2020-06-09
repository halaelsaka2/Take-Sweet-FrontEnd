import React from "react";
import NewsItem from "./newsItem";
const NewsItemList = ({ newsList }) => {
  return (
    <React.Fragment>
      <h4 className="container__col__title">NEWS</h4>
      <ul className="container__col__menu grid">
        {newsList.map((item) => (
          <NewsItem
            key={item.id}
            src={item.src}
            alt={item.alt}
            text={item.text}
            date={item.date}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default NewsItemList;
