import React, { Component } from "react";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Search from "../../components/Search";
import ProductItem from "../../components/";

export class ProductsPage extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        {this.props.pageType === "buyerPage" ? (
          <div class="text-container">
            <h3 class="text-container-h3">Our Products</h3>
            <br />
            Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for large
            meetings or celebrations; our food has something for everyone.
          </div>
        ) : (
          {}
        )}
        <div class="tabs-containera">
          <Search></Search>
        </div>
        <div class="list-container">
          {this.state.map((item) => (
            <ProductItem
              name={item.name}
              src={item.src}
              amount={item.amount}
              pageType={this.props.pageType}
            ></ProductItem>
          ))}
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
