import React, { Component } from "react";
import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import { addProduct, uploadImage } from "../../redux-modules/products/actions";
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

  componentDidMount() {
    const imageSrc = this.props.imageSrc;
    const product = { ...this.state.product, imageSrc };
    this.setState({ product });
  }

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

  imageUploadHandler = async (event) => {
    console.log(event.target.file);
    const image = event.target.files[0];
    const formDate = new FormData();
    formDate.set("image", image);
    await this.props.uploadImage(formDate);
    const imageSrc = "http://localhost:3000/" + this.props.imageSrc;
    const product = { ...this.state.product, imageSrc };
    this.setState({ product });
  };

  render() {
    const {
      state: { product, isAddButtonClicked },
    } = this;
    console.log(this.state.product);
    const handlers = {
      onChange: this.inputHandler,
      onCancelButtonClicked: this.buttonHandler,
      handleSubmit: this.buttonHandler,
      onCategoryChange: this.categotyHandler,
      imagehandling: this.imageUploadHandler,
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
const mapStateToPorpos = (state) => {
  return {
    imageSrc: state.products.imageSrc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapStateToPorpos, mapDispatchToProps)(AddProduct);
