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

const LastMinDealSection = ({
  paginate,
  productsPerPage,
  currentPage,
  productsList,
  sortList,
  categoryList,
  type,
  description,
  categoryDropDownStatus,
  sortDropDownStatus,
  addToCart,
  plusHandler,
  minusHandler,
  amountHandler,
  sortDropdownIsOpenHandle,
  categoryDropdownIsOpenHandle,
  selectSortHandle,
  selectCategoryHandle,
  category,
  sort,
  onSale,
  isCompany,
  isDeal
}) => {
  const firstIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = firstIndex + productsPerPage;
  const currentProducts = productsList.slice(firstIndex, lastIndex);
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
        {type !== "Brands" ? (
          <div className="list-container">
            {currentProducts.map((item) => (
              <ProductItem
                Key={item.id}
                type={type}
                name={item.name}
                src={"assets/images/donut.jpg"}
                minPieces={item.minPieces}
                addToCart={addToCart}
                price={item.price}
                plusHandler={plusHandler}
                minusHandler={minusHandler}
                id={item.id}
                amount={item.amount}
                amountHandler={amountHandler}
                onSale={onSale}
                isCompany={isCompany}
                isDeal={isDeal}
              ></ProductItem>
            ))}
          </div>
        ) : (
          <div className="list-container list-container--4">
            {currentProducts.map((item) => (
              <BrandItem
                key={item.id}
                src={item.userId.imageSrc}
                id={item.userId.id}
              ></BrandItem>
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
LastMinDealSection.defaultProps = {
  productsList: [],
};

LastMinDealSection.propTypes = {
  products: PropTypes.array,
  sortbyList: PropTypes.array,
  category: PropTypes.array,
  type: PropTypes.string,
  description: PropTypes.object,
};
LastMinDealSection.defaultProps = {
  productsList: [],
};
export default LastMinDealSection;
