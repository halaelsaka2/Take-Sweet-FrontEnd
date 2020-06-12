import React, { Component } from "react";
import { connect } from "react-redux";
// import { string, object } from "yup";

import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";

class AddProduct extends Component {
  state = {
    product: {
      imageSrc: "jjjjj",
      name: "",
      availableAmount: "",
      minPieces: "",
      price: "",
      category: "",
    },
  };

  handleChange = (event) => {
    const product = { ...this.state.product };
    product[event.target.name] = event.target.value;
    console.log(product);
    this.setState({ product });
  };

  // handlePaymentTypeChange = (e) => {
  //   let paymentTypes = [...this.state.paymentTypes];
  //   const name = e.target.name;
  //   let paymentTypeChecked = paymentTypes.find(
  //     (paymentType) => paymentType.name === name
  //   );
  //   paymentTypeChecked.checked = !paymentTypeChecked.checked;
  //   console.log(paymentTypes);
  //   this.setState({ paymentTypes });
  // };

  handleCategoryChange = (e) => {
    const product = { ...this.state.product };
    const categorySelected = parseInt(e.target.value);
    product.category = categorySelected;
    console.log(product);
    this.setState({ product });
  };

  handelCancel = (e) => {
    e.preventDefault();
    this.props.history.push("/seller");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.replace("/seller");
  };
  render() {
    const {
      state: {
        product: {
          name,
          imageSrc,
          moreDetails,
          availableAmount,
          minPieces,
          price,
          category,
        },
      },
      handleChange,
      // handlePaymentTypeChange,
      handleCategoryChange,
      handleSubmit,
      handelCancel,
    } = this;

    return (
      <AddProducSection
        productNameValue={name}
        countItems={constants.countItems}
        countItemValues={[availableAmount, minPieces, , price]}
        imgSrc={imageSrc}
        moreDetailsValue={moreDetails}
        // paymentTypes={paymentTypes}
        categories={constants.categories}
        onChange={handleChange}
        // checkedPayment={paymentTypes.checked}
        checkedCategory={category}
        // onPaymentTypeChange={handlePaymentTypeChange}
        onCategoryChange={handleCategoryChange}
        tabs={constants.tabs}
        currentTabe={constants.currentTabe}
        onAddButtonClicked={handleSubmit}
        onCancelButtonClicked={handelCancel}
      />
    );
  }
}

export default AddProduct;
