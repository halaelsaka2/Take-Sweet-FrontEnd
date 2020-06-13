import React, { Component } from "react";
import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

class AddProduct extends Component {
  state = {
    product: {
      imageSrc: "jjjjj",
      name: "uuuu",
      availableAmount: "",
      minPieces: "",
      price: "",
      category: "",
    },
    isAddButtonClicked: "",
  };
  componentDidMount() {
    const product = {
      imageSrc: "jjjjj",
      name: "eman",
      availableAmount: "5",
      minPieces: 10,
      price: 500,
      category: 1,
    };
    this.setState({ product });
  }
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
    const isAddButtonClicked = true;
    this.setState({ isAddButtonClicked });
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
        isAddButtonClicked,
      },
      handleChange,
      handleCategoryChange,
      handleSubmit,
      handelCancel,
    } = this;

    return (
      <React.Fragment>
        <Header />
        <AddProducSection
          productNameValue={name}
          countItems={constants.countItems}
          countItemValues={[availableAmount, minPieces, , price]}
          imgSrc={imageSrc}
          moreDetailsValue={moreDetails}
          categories={constants.categories}
          onChange={handleChange}
          checkedCategory={category}
          onCategoryChange={handleCategoryChange}
          tabs={constants.tabs}
          currentTabe={constants.currentTabe}
          handleSubmit={handleSubmit}
          onCancelButtonClicked={handelCancel}
          isAddButtonClicked={isAddButtonClicked}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AddProduct;
