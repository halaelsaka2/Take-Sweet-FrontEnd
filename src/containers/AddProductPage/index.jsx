import React, { Component } from "react";
import AddProducSection from "../../components/AddProductSection";
import constants from "./contants";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import {
  addProduct,
  uploadImage,
  getPorductById,
  editProduct
} from "../../redux-modules/products/actions";
import { connect } from "react-redux";
import { products } from "../../redux-modules/products/api.mock";

class AddProduct extends Component {
  state = {
    product: {
      imageSrc: "",
      name: "",
      availableAmount: "",
      minPieces: "",
      price: "",
      category: "",
      categoryId: "",
    },
    isAddButtonClicked: "",
    token: "",
    type:""
  };

  async componentDidMount() {
    if (this.props.match.url !== "/addProduct") {
      const id = this.props.match.params.id;
      await this.props.getProduct(id);
      const product = this.props.product;
      const type = "edit"
      this.setState({ product,type });
    } else {
      const imageSrc = this.props.imageSrc;
      const product = { ...this.state.product, imageSrc };
      const token = this.props.token;
      const type = "add"

      this.setState({ product, token,type });
    }
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
    } else if(event.target.name === "add"){
      const product = { ...this.state.product };
      switch (product.category) {
        case 1:
          product.categoryId = "5ee21fba7f98cd0cd8a724d9";
        case 2:
          product.categoryId = "5ee2322e57a2c453680237cc";
        case 3:
          product.categoryId = "5ee2325157a2c453680237cd";
      }
      await this.props.addProduct(product);
      this.props.history.replace("/seller");
    }else{
      const product = { ...this.state.product };
      const id = this.props.match.params.id;
      await this.props.editproduct(id, product)
      this.props.history.push("/seller");
    }
  };

  imageUploadHandler = async (event) => {
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
      state: { product, isAddButtonClicked,type },
    } = this;
    console.log(this.state);
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
          type={type}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    imageSrc: state.products.imageSrc,
    token: state.user.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    addProduct: (product) => dispatch(addProduct(product)),
    getProduct: (id) => dispatch(getPorductById(id)),
    editproduct:(id,product)=>dispatch(editProduct(id,product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
