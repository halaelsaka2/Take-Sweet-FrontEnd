import React from "react";
import Input from "./../Input/input";

const Search = () => (
  <div className="search">
    <Input type="text" placeholder="search" className="input input--m" />
    <div className="search-icon-Container">
      <i
        className="fa fa-search search-icon-Container__icon "
        aria-hidden="true"
      ></i>
    </div>
  </div>
);
export default Search;
