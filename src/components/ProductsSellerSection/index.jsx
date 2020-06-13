import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Search from "../Search";
import ProductItem from "../ProductItem";
import DropDown from "../Dropdown";
import PropTypes from "prop-types";

const ProductsSellerSection = ({
  sortDropDownStatus,
  categoryDropDownStatus,
  dropDownHandler,
  productsList,
  sortList,
  categoryList,
  Type,
}) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="project-container project-container--h">
        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
            status={sortDropDownStatus}
            dropDownHandler={dropDownHandler}
              listItems={sortList}
              isOpened={true}
              Header={"sortBy"}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
            status={categoryDropDownStatus}
            dropDownHandler={dropDownHandler}
              listItems={categoryList}
              isOpened={false}
              Header={"Category"}
            ></DropDown>
          </div>
          <Search></Search>
        </div>

        <div className="list-container">
          {productsList.map((item) => (
            <ProductItem
              name={item.name}
              src={item.src}
              amount={item.amount}
              Type={"seller"}
            ></ProductItem>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

ProductsSellerSection.prototypes = {
  products: PropTypes.array,
  sortbyList: PropTypes.array,
  categoryList: PropTypes.array,
  pageType: PropTypes.string,
};

export default ProductsSellerSection;
