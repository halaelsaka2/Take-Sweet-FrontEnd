import React, { Component } from "react";
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
  componentDidUpdate(prevProps) {
    if (this.props.addOrder !== prevProps.addOrder) {
      this.navigateHandler();
    }
  }
  navigateHandler = () => {
    this.props.history.push("/track-order");
  };
  componentDidMount = () => {
    const shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"))
      ? JSON.parse(localStorage.getItem("shoppingBagList"))
      : [];
    if (shoppingBagList) {
      const id = this.props.match.params.id;
      const orderRecived = shoppingBagList.find(
        (order) => order.company.id === id
      );
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
    this.setState({ order });
  };
  handleSubmit = () => {
    const id = this.props.match.params.id;
    const newOrder = this.state.order;
    this.props.cancelHandle(id);
    this.props.addNewOrder(newOrder);
    let shoppingBagList = JSON.parse(localStorage.getItem("shoppingBagList"));
    shoppingBagList = shoppingBagList.filter((m) => m.company.id !== id);
    localStorage.setItem("shoppingBagList", JSON.stringify(shoppingBagList));
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
  return {
    paymentTypes: state.paymentTypes.paymentTypesList,
    addOrder: state.orders.addOrder,
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
