import React from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Search from "../../components/Search";
import ProductItem from "../../components/ProductItem";
import DropDown from "../../components/Dropdown";
import DescriptionSection from "../../components/DescriptionScetion";
const ProductsSection = ({ products, sortbyList, categoryList }) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="project-container project-container--h">
        {this.props.pageType === "buyerPage" && (
          <DescriptionSection
            titleClassName={"text-container-h3"}
            title={"Our Products"}
            textClassName={"text-container"}
            text={`Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for
            large meetings or celebrations; our food has something for
            everyone`}
          ></DescriptionSection>
        )}
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
              ListItems={categoryList}
              isOpened={false}
              Header={"Category"}
            ></DropDown>
          </div>

          <Search></Search>
        </div>
        <div className="list-container">
          {products.map((item) => (
            <ProductItem
              name={item.name}
              src={item.src}
              amount={item.amount}
              pageType={this.props.pageType}
            ></ProductItem>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default ProductsSection;
