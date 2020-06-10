import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import DescriptionSection from "../DescriptionSection";
import DropDown from "../Dropdown";
import Search from "../Search";
import BrandItem from "../BrandItem";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";

const ProductsSection = ({ products, sortbyList, category, type }) => {
  console.log(sortbyList);
  return (
    <React.Fragment>
      <Header></Header>
      <DescriptionSection
        titleClassName={"text-container-h3"}
        title={"Our Products"}
        textClassName={"text-container"}
        text={`Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for
            large meetings or celebrations; our food has something for
            everyone`}
      ></DescriptionSection>
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
      {type === "buyer-page" ? (
        <div className="list-container">
          {products.map((item) => (
            <ProductItem
              name={item.name}
              src={item.src}
              amount={item.amount}
            ></ProductItem>
          ))}
        </div>
      ) : (
        <div className="list-container list-container--4">
          {products.map((item) => (
            <BrandItem src={item.src}></BrandItem>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

ProductsSection.propTypes = {
  products: PropTypes.array,
  sortbyList: PropTypes.array,
  category: PropTypes.array,
  type: PropTypes.string,
};

export default ProductsSection;
