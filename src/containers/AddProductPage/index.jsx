import React, { Component } from "react";
import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";

class AddProduct extends Component {
  state = {
    product: {
      imgSrc: "",
      name: "",
      availableAmount: "",
      piecesForTrade: "",
      price: "",
      category: { id: "", name: "" },
      paymentTypes: [],
      moreDetails: "",
    },
    paymentTypes: [
      { id: 1, name: "cash", checked: false },
      { id: 2, name: "visa", checked: false },
      { id: 3, name: "Master Card", checked: false },
      { id: 4, name: "Cheque payment", checked: false },
      { id: 5, name: "PayPal", checked: false },
    ],
  };

  handleChange = (event) => {
    const product = { ...this.state.product };
    product[event.target.name] = event.target.value;
    console.log(product);
    this.setState({ product });
  };

  handlePaymentTypeChange = (e) => {
    let paymentTypes = [...this.state.paymentTypes];
    const name = e.target.name;
    let paymentTypeChecked = paymentTypes.find(
      (paymentType) => paymentType.name === name
    );
    paymentTypeChecked.checked = !paymentTypeChecked.checked;
    console.log(paymentTypes);
    this.setState({ paymentTypes });
  };

  handleCategoryChange = (e) => {
    const product = { ...this.state.product };
    const categories = [...this.state.categories];
    const categorySelected = parseInt(e.target.value);
    product.category = categories.find(
      (category) => category.id === categorySelected
    );
    this.setState({ product });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let paymentTypes = [...this.state.paymentTypes];
    paymentTypes = console.log(this.state.product);
  };

  render() {
    const {
      state: {
        product: {
          name,
          imgSrc,
          moreDetails,
          availableAmount,
          piecesForTrade,
          price,
          category,
        },
        paymentTypes,
      },
      handleChange,
      handlePaymentTypeChange,
      handleCategoryChange,
      handleSubmit,
      handelCancel,
    } = this;

    return (
      <AddProducSection
        productNameValue={name}
        countItems={constants.countItems}
        countItemValues={[availableAmount, piecesForTrade, price]}
        imgSrc={imgSrc}
        moreDetailsValue={moreDetails}
        paymentTypes={paymentTypes}
        categories={constants.categories}
        onChange={handleChange}
        checkedPayment={paymentTypes.checked}
        checkedCategory={category.id}
        onPaymentTypeChange={handlePaymentTypeChange}
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
