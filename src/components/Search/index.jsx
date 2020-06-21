import React from "react";
import Input from "./../Input";

const Search = ({ searchHandler, searchValue }) => (
  <div className="search">
    <Input
      type="text"
      placeholder="search"
      className="input input--m"
      onChange={searchHandler}
      value={searchValue}
    />
    <div className="search-icon-Container">
      <i
        className="fa fa-search search-icon-Container__icon "
        aria-hidden="true"
      ></i>
    </div>
  </div>
);

export default Search;
