import React from "react";
import Header from "../Layouts/Header/index";
import Search from "../Search/index";

import { Container } from "reactstrap";
import HistoryStates from "../HistoryStates/index";
import ProductCardList from "../productCardList/index";
import Footer from "../Layouts/Footer/index";
import OrderDate from "./../OrderDate/index";
import Paging from "./../paging/index";

const HistoryFromUserSection = ({
  productCards,
  date,
  statusTabs,
  currentTabe,
  handleTabChange,
}) => {
  return (
    <React.Fragment>
      <Header />
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
      <OrderDate date={date} />
      <div className="project-container project-container--h">
        <div className="history-cards-container history-cards-container--user project-container project-container--h">
          <ProductCardList productCards={productCards} />
        </div>
      </div>
      <Container>
        <Paging />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default HistoryFromUserSection;
