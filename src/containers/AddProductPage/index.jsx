import React, { Component } from "react";
import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { addProduct } from "../../redux-modules/products/actions";
import { connect } from "react-redux";

class AddProduct extends Component {
  state = {
    product: {
      imageSrc: "assets/images/donut.jpg",
      name: "",
      availableAmount: "",
      minPieces: "",
      price: "",
      category: "",
    },
    isAddButtonClicked: "",
  };

  inputHandler = (event) => {
    const { value, name } = event.target;
    const product = { ...this.state.product, [name]: value };
    this.setState({ product });
  };

  categotyHandler = (event) => {
    const { value, name } = event.target;
    const product = { ...this.state.product, [name]: parseInt(value) };
    this.setState({ product });
  };

  buttonHandler = async (event) => {
    event.preventDefault();
    if (event.target.name === "cancel") {
      this.props.history.push("/seller");
    } else {
      const product = { ...this.state.product };
      await this.props.addProduct(product);
      this.props.history.replace("/seller");
    }
  };

  render() {
    const {
      state: { product, isAddButtonClicked },
    } = this;

    const handlers = {
      onChange: this.inputHandler,
      onCancelButtonClicked: this.buttonHandler,
      handleSubmit: this.buttonHandler,
      onCategoryChange: this.categotyHandler,
    };

    return (
      <React.Fragment>
        <Header />
        <AddProducSection
          handlers={handlers}
          product={product}
          isAddButtonClicked={isAddButtonClicked}
          constants={constants}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
