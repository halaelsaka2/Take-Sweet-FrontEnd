import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Search from "../../components/Search";
import ProductItem from "../../components/ProductItem";
import DropDown from "../../components/Dropdown";
import DescriptionSection from "../../components/DescriptionScetion";

export default class ProductsPage extends Component {
  state = {
    products: [],
    sortbyList: [],
    categoryList: [],
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div class="project-container project-container--h">
          {this.props.pageType === "buyerPage" && (
            <DescriptionSection
              titleClassName={"text-container-h3"}
              title={"Our Products"}
              textClassName={"text-container"}
              text={`Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for
            large meetings or celebrations; our food has something for
            everyone`}
            ></DescriptionSection>
          )}
          <div class="tabs-containera">
            <DropDown
              dropdownListItems={this.state.sortbyList}
              isOpened={false}
              dropdownHeader={"sortBy"}
            ></DropDown>
            <DropDown
              dropdownListItems={this.state.categoryList}
              isOpened={false}
              dropdownHeader={"Category"}
            ></DropDown>
            <Search></Search>
          </div>
          <div class="list-container">
            {this.state.products.map((item) => (
              <ProductItem
                name={item.name}
                src={item.src}
                amount={item.amount}
                pageType={this.props.pageType}
              ></ProductItem>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
