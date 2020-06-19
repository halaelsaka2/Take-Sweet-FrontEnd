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
      categoryId: "",
    },
    isAddButtonClicked: "",
    token: "",
  };

  componentDidMount() {
    const imageSrc = this.props.imageSrc;
    const product = { ...this.state.product, imageSrc };
    const token = this.props.token;
    this.setState({ product, token });
  }

  inputHandler = (event) => {
    const { value, name } = event.target;
    const product = { ...this.state.product, [name]: value };
    this.setState({ product });
  };

  categotyHandler = (event) => {
    const { value, name } = event.target;
    // console.log(name, value);
    const product = { ...this.state.product, [name]: parseInt(value) };
    // console.log(product);
    this.setState({ product });
  };

  buttonHandler = async (event) => {
    event.preventDefault();
    if (event.target.name === "cancel") {
      this.props.history.push("/seller");
    } else {
      const product = { ...this.state.product };
      switch (product.category) {
        case 1:
          product.categoryId = "5ee21fba7f98cd0cd8a724d9";
        case 2:
          product.categoryId = "5ee2322e57a2c453680237cc";
        case 3:
          product.categoryId = "5ee2325157a2c453680237cd";
      }
      console.log(product);
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
const mapStateToProps = (state) => {
  return {
    imageSrc: state.products.imageSrc,
    token: state.user.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
