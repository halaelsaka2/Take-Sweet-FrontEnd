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
import Pagination from "../Pagination";

const ProductsSection = ({
  paginate,
  productsPerPage,
  currentPage,
  productsList,
  sortList,
  categoryList,
  type,
  description,
  dropDownHandler,
  categoryDropDownStatus,
  sortDropDownStatus,
  addToCart,
}) => {
  const firstIndex = (currentPage - 1) * productsPerPage;
    const lastIndex = firstIndex + productsPerPage;
    const currentProducts = productsList.slice(
      firstIndex,
      lastIndex
    );
  return (
    <React.Fragment>
      <Header />
      {/* <Container ></Container> */}
      <div className="project-container project-container--h">
        <DescriptionSection
          titleClassName={"text-container-h3"}
          title={description.title}
          textClassName={"text-container"}
          text={description.text}
        ></DescriptionSection>

        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={sortList}
              Header={"sortBy"}
              dropDownHandler={dropDownHandler}
              status={sortDropDownStatus}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={categoryList}
              dropDownHandler={dropDownHandler}
              status={categoryDropDownStatus}
              Header={"Category"}
            ></DropDown>
          </div>
          <Search></Search>
        </div>
        {type !== "Brands" ? (
          <div className="list-container">
            {currentProducts.map((item) => (
              <ProductItem
                type={type}
                name={item.name}
                src={item.src}
                amount={item.amount}
                addToCart={addToCart}
                price={item.price}
              ></ProductItem>
            ))}
          </div>
        ) : (
          <div className="list-container list-container--4">
            {currentProducts.map((item) => (
              <BrandItem src={item.src}></BrandItem>
            ))}
          </div>
        )}
        {productsList.length > productsPerPage && (
          <Container>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={productsList.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </Container>
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
  description: PropTypes.object,
};

export default ProductsSection;
