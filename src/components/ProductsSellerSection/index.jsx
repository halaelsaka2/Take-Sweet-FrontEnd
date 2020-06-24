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
  productsList,
  sortList,
  categoryList,
  sortDropdownIsOpenHandle,
  categoryDropdownIsOpenHandle,
  selectSortHandle,
  selectCategoryHandle,
  category,
  sort,
  deleteHandle,
  Type,
  isCompany,
  onSaleStyle,
  isDeal,
  onSaleHandle,
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
                listItems={sortList.map((sort) => sort.name)}
                Header={sort}
                IsOpenHandle={sortDropdownIsOpenHandle}
                isOpened={sortDropDownStatus}
                selectionHandle={selectSortHandle}
                idList={sortList.map((sort) => sort.id)}
              ></DropDown>
            </div>
            <div style={{ position: "relative" }}>
              <DropDown
                listItems={categoryList.map((category) => category.name)}
                IsOpenHandle={categoryDropdownIsOpenHandle}
                isOpened={categoryDropDownStatus}
                Header={category}
                selectionHandle={selectCategoryHandle}
                idList={categoryList.map((category) => category.id)}
              ></DropDown>
            </div>
            <Search></Search>
          </div>
          <Link to="add-product">
            <Plus></Plus>
          </Link>
        </div>

        <div className="list-container">
          {currentProducts.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              deleteHandle={deleteHandle}
              id={item.id}
              name={item.name}
              src={item.imageSrc}
              amount={item.amount}
              Type={"seller"}
              isCompany={isCompany}
              onSaleStyle={onSaleStyle}
              isDeal={isDeal}
              onSaleHandle={onSaleHandle}
              onSale={item.onSale}
            ></ProductItem>
          ))}
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
