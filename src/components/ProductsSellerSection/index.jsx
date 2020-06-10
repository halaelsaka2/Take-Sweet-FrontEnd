import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Search from "../Search";
import ProductItem from "../ProductItem";
import DropDown from "../Dropdown";
import PropTypes from "prop-types";

const ProductsSellerSection = ({ products, sortbyList, category, pageType }) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="project-container project-container--h">
        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
              ListItems={sortbyList}
              isOpened={true}
              Header={"sortBy"}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
              ListItems={category}
              isOpened={false}
              Header={"Category"}
            ></DropDown>
          </div>
          <Search></Search>
        </div>

        <div className="list-container">
          {products.map((item) => (
            <ProductItem
              name={item.name}
              src={item.src}
              amount={item.amount}
              pageType={pageType}
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
