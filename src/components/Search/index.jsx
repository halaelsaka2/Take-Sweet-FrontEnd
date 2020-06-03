import React from "react";
import Input from "../Input";
const Search = () => {
  return (
    <React.Fragment>
      <div className="userHistoryFilter">
        <div className="search">
          <form>
            <Input
              type="text"
              placeholder="search"
              className="input input--m"
            />
            <div className="search-icon-Container">
              <i
                className="fa fa-search search-icon-Container__icon "
                aria-hidden="true"
              ></i>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
