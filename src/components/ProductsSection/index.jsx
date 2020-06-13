import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import DescriptionSection from "../DescriptionSection";
import DropDown from "../Dropdown";
import Search from "../Search";
import BrandItem from "../BrandItem";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { products } from "../../containers/BrandsPage/dumy";

const ProductsSection = ({ productsList, sortList, categoryList, type }) => {
  return (
    <React.Fragment>
      <Header />
      {/* <Container ></Container> */}
      <div className="project-container project-container--h">
        <DescriptionSection
          titleClassName={"text-container-h3"}
          title={"Our Products "}
          textClassName={"text-container"}
          text={`Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for
            large meetings or celebrations; our food has something for
            everyone`}
        ></DescriptionSection>
        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={sortList}
              isOpened={true}
              Header={"sortBy"}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={categoryList}
              isOpened={false}
              Header={"Category"}
            ></DropDown>
          </div>
          <Search></Search>
        </div>
        {type === "seller" ? (
          <div className="list-container">
            {productsList.map((item) => (
              <ProductItem
                name={item.name}
                src={item.src}
                amount={item.amount}
              ></ProductItem>
            ))}
          </div>
        ) : (
          <div className="list-container list-container--4">
            {productsList.map((item) => (
              <BrandItem src={item.src}></BrandItem>
            ))}
          </div>
        )}
      </div>
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
