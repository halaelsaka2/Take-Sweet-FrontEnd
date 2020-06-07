import React from "react";
import Bestsellers from "../BestSellers";
import Bestcompanies from "../Bestcompanies";

const BestSection = ({ products, companies }) => {
  return (
    <React.Fragment>
      {products && <Bestsellers products={products} />}
      {companies && <Bestcompanies companies={companies} />}
    </React.Fragment>
  );
};

export default BestSection;
