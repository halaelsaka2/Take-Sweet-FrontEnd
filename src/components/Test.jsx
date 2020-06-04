import React, { Component } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Dropdown from "./Dropdown";

import Search from "./Search/index";
class Test extends Component {
  state = {};
  render() {
    return (
      // <Header />

      <div class="project-container project-container--h">
        lllllllllllllllll
        <div class="tabs-containera">
          <div class="listing-dropdown-container">
            <Dropdown
              dropdownHeader="Category"
              dropdownListItems={["a", "b", "c", "d"]}
              isOpened={true}
            />
          </div>

          <div class="listing-dropdown-container">
            <Dropdown
              dropdownHeader="Category"
              dropdownListItems={["a", "b", "c", "d"]}
              isOpened={true}
            />
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Test;
