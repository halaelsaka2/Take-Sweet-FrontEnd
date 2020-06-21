import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderDetaislSection from "../../components/OrderDetailsSection";
import { connect } from "react-redux";
import { getAllPaymentTypes } from "../../redux-modules/paymentTypes/actions";
import { addOrder } from "../../redux-modules/orders/actions";

class OrderDetailsPage extends Component {
  state = {
    order: {
      companyId: "",
      userId: "",
      orderProducts: [
        {
          amount: "",
          categoryId: "",
          imageSrc: "",
          name: "",
          price: "",
          totalPrice: "",
          productId: "",
        },
      ],
      totalPrice: "",
      paymentType: "",
      comments: "",
    },
    paymentTypes: [],
  };
  componentDidMount = () => {
    const shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"))
      ? JSON.parse(localStorage.getItem("shoppingBagList"))
      : [];
    if (shoppingBagList) {
      const id = this.props.match.params.id;
      // console.log("paraaaaaaaaaaaams id", id);
      const orderRecived = shoppingBagList.find(
        (order) => order.company.id === id
      );
      console.log(orderRecived);
      let m = orderRecived.shoppingBagProducts.map((product) => {
        return {
          productId: product.id,
          name: product.name,
          amount: product.amount,
          price: product.price,
          totalPrice: product.totalPrice,
          imageSrc: product.imageSrc,
          categoryId: product.categoryId.id,
        };
      });
      let order = {};
      order.companyId = orderRecived.company.id;
      order.orderProducts = m;

      const user = JSON.parse(localStorage.getItem("user"));
      order = {
        ...order,
        totalPrice: orderRecived.totalPrice,
        paymentType: "",
        comments: "",
        userId: user.id,
      };
      this.props.getPaymentTypes();
      console.log(order);
      this.setState({ order });
    }
  };
  handleChange = (e) => {
    let { order } = this.state;
    order.comments = e.target.value;
    this.setState({ order });
  };
  handlePaymentTypeChange = (e) => {
    const order = { ...this.state.order };
    const paymentTypeSelected = e.target.value;
    order.paymentType = paymentTypeSelected;
    console.log(order);
    this.setState({ order });
  };
  handleSubmit = () => {
    const id = this.props.match.params.id;
    const newOrder = this.state.order;
    console.log(newOrder);
    this.props.addNewOrder(newOrder);

    let shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"));
    shoppingBagList = shoppingBagList.filter((m) => m.company.id !== id);
    this.setState({});
    localStorage.setItem("shoppingBagList", JSON.stringify(shoppingBagList));
    // this.props.history.push("/brands");
  };
  handleCancel = () => {
    this.props.history.push("/buyer");
  };
  render() {
    const {
      state: { order },
      handleChange,
      handlePaymentTypeChange,
      handleCancel,
      handleSubmit,
    } = this;
    let { paymentTypes } = this.props;
    paymentTypes = paymentTypes.map((payType) => ({
      ...payType,
      checked: "",
    }));
    // console.log(this.props.paymentTypes);

    return (
      <OrderDetaislSection
        rows={order.orderProducts}
        isDeletable={false}
        recommendationsValue={order.comments}
        checkedPaymentType={order.paymentType}
        handlePaymentTypeChange={handlePaymentTypeChange}
        onChange={handleChange}
        confirmButtonHandle={handleSubmit}
        cancelButtonHandle={handleCancel}
        paymentTypes={paymentTypes}
        totalPrice={order.totalPrice}
      />
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.paymentTypes.paymentTypesList);
  return {
    paymentTypes: state.paymentTypes.paymentTypesList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPaymentTypes: () => {
      dispatch(getAllPaymentTypes());
    },
    addNewOrder: (order) => {
      dispatch(addOrder(order));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsPage);
