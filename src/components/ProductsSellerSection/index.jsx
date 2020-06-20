import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Search from "../Search";
import ProductItem from "../ProductItem";
import DropDown from "../Dropdown";
import PropTypes from "prop-types";
import Plus from "../AddProductPlus";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Pagination from "../Pagination";

const ProductsSellerSection = ({
  paginate,
  productsPerPage,
  currentPage,
  sortDropDownStatus,
  categoryDropDownStatus,
  dropDownHandler,
  productsList,
  sortList,
  categoryList,
  Type,
}) => {
  const firstIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = firstIndex + productsPerPage;
  const currentProducts = productsList.slice(firstIndex, lastIndex);
  return (
    <React.Fragment>
      <Header></Header>
      <div className="project-container project-container--h">
        <div class="gridAdded">
          <div className="tabs-containera">
            <div style={{ position: "relative" }}>
              <DropDown
                status={sortDropDownStatus}
                dropDownHandler={dropDownHandler}
                listItems={sortList}
                isOpened={false}
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
          <Link to="add-product">
            <Plus></Plus>
          </Link>
        </div>

        <div className="list-container">
          {currentProducts.map((item) => {
            console.log(item);
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                src={item.imageSrc}
                amount={item.amount}
                Type={"seller"}
              ></ProductItem>
            );
          })}
        </div>
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
