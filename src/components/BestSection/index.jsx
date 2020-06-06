import React from "react";
import Bestsellers from "../BestSellers";
import Bestcompanies from "../Bestcompanies/Bestcompanies";

const BestSection = ({ products, companies }) => {
  return (
    <React.Fragment>
      {products && <Bestsellers products={products} />}
      {companies && <Bestcompanies companies={companies} />}
    </React.Fragment>
  );
};

export default BestSection;

///////Products///////
{
  /* <Bestsellers
        products={[
          {
            id: 1,
            name: "product",
            src: "assets/images/Product-1.jpg",
          },
          {
            id: 2,
            name: "product",
            src: "assets/images/Product-1.jpg",
          },
          {
            id: 3,
            name: "product",
            src: "assets/images/Product-1.jpg",
          },
          {
            id: 4,
            name: "product",
            src: "assets/images/Product-1.jpg",
          },
        ]}
      /> */
}

///////Companies////////
{
  /* <Bestsellers
  companies={[
    {
      id: 1,
      name: "company",
      src: "assets/images/Logo.png",
    },
    {
      id: 2,
      name: "company",
      src: "assets/images/Logo.png",
    },
    {
      id: 3,
      name: "company",
      src: "assets/images/Logo.png",
    },
    {
      id: 4,
      name: "company",
      src: "assets/images/Logo.png",
    },
  ]}
/>; */
}
