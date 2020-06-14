import React from "react";
import Search from "../Search";

import { Container } from "reactstrap";
import HistoryStates from "../HistoryStates";
import ProductCardList from "../ProductCardList";

import OrderDate from "../OrderDate";
import Pagination from "../Pagination";
import CompanyLogo from "../CompanyLogo";

const HistoryFromUserSection = ({
  productCards,
  currentProducts,
  date,
  statusTabs,
  currentTabe,
  productsPerPage,
  paginate,
  currentPage,
  handleTabChange,
  companyLogoImgSrc,
}) => {
  return (
    <React.Fragment>
      <Container>
        <div className="project-container project-container--h">
          <div className="userHistoryFilter ">
            <Search />
          </div>
        </div>
      </Container>
      <HistoryStates
        tabs={statusTabs}
        currentTabe={currentTabe}
        handleTabChange={handleTabChange}
      />

      {currentProducts.length === 0 ? (
        <div className="text-container">There is no products to be shown</div>
      ) : (
        <React.Fragment>
          <OrderDate date="14/6/2020" />
          <CompanyLogo imgSrc="assets/images/ElAbd.jpg" />
          <div className="project-container project-container--h">
            <div className="history-cards-container history-cards-container--user project-container project-container--h">
              <ProductCardList productCards={currentProducts} />
            </div>
          </div>
        </React.Fragment>
      )}
      {productCards.length > productsPerPage && (
        <Container>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={productCards.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </Container>
      )}
    </React.Fragment>
  );
};

export default HistoryFromUserSection;

HistoryFromUserSection.defaultProps = {
  currentPage: 1,
};
