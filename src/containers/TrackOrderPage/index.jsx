import React, { Component } from "react";
import { dumy } from "./dumy";
import { constants } from "./constants";
import TrackOrderSection from "../../components/TrackOrderSection";
import { connect } from "react-redux";
import {
  getAllOrders,
  deleteOrder,
  getAllOrdersByUserId,
  getAllOrdersByCompanyId,
  updateOrder,
} from "../../redux-modules/orders/actions";

class TrackOrder extends Component {
  state = {
    statusTabs: constants.statusTabs,
    ordersPerPage: constants.ordersPerPage,
    currentTabe: 0,
    currentPage: 1,
    statusorders: [],
    role: "",
  };
  componentDidUpdate = async (prevProps) => {
    if (this.props.orders !== prevProps.orders) {
      console.log(this.props.orders);
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.roleId.name, "llllllllllllllllllllllllllllll");
      if (user.roleId.name === "Company") {
        console.log("cafeeeeee");
        await this.props.getAllOrdersByCompanyId(user.id);
      }
      // } else {
      //   console.log("companyyyyyy");
      // }
      
      this.setState({ statusorders: this.props.orders });
    }
  };
  
  async componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.roleId.name, "llllllllllllllllllllllllllllll");

    if (user.roleId.name === "Cafe") {
      console.log("cafeeeeee");
      await this.props.getAllOrdersByUserId(user.id);
    } else {
      console.log("companyyyyyy");
      await this.props.getAllOrdersByCompanyId(user.id);
    }
    const statusorders = this.props.orders;

    console.log(statusorders, "mennnnnnnnnnnnnaaaaaaaaaaa");
    if (user) {
      this.setState({
        userName: user.userName,
        role: user.roleId.name,
        statusorders,
      });
    }
  }

  handleTabChange = (currentTabe) => {
    const {
      state: { statusTabs },
    } = this;
    const orders = this.props.orders;
    let statusorders = orders;
    const currentStatus = statusTabs[currentTabe];

    if (currentTabe !== 0) {
      statusorders = orders.filter((order) => order.status === currentStatus);
    }
    this.setState({ currentTabe, statusorders, currentPage: 1 });
  };
  handleCancelOrder = (id) => {
    this.props.deleteOrder(id);
  };

  handleStatusChange = (event, id) => {
    const order = this.props.orders.find((order) => order.id === id);
    const status = event.target.name;
    const updatedOrder = { ...order, status };
    this.props.updateHandler(id, updatedOrder);
    // console.log(orders, "3andi");
    // let statusorders = orders;
    // // if (currentTabe !== 0) {
    // //   statusorders = orders.filter((order) => order.status === );
    // // }
    // console.log(event.target.value, "mmmmmmmmmmmmmm");
  };

  paginate = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    let {
      state: {
        statusTabs,
        currentTabe,
        ordersPerPage,
        currentPage,
        statusorders,
        role,
      },
      handleTabChange,
      handleCancelOrder,
      paginate,
      handleStatusChange,
    } = this;
    // console.log(this.props.orders);
    const firstIndex = (currentPage - 1) * ordersPerPage;
    const lastIndex = firstIndex + ordersPerPage;
    const currentOrders = statusorders.slice(firstIndex, lastIndex);

    return (
      <TrackOrderSection
        orders={statusorders}
        currentProducts={currentOrders}
        statusTabs={statusTabs}
        currentTabe={currentTabe}
        productsPerPage={ordersPerPage}
        currentPage={currentPage}
        paginate={paginate}
        handleTabChange={handleTabChange}
        handleCancelOrder={handleCancelOrder}
        role={role}
        handleStatusChange={handleStatusChange}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrders: () => dispatch(getAllOrders()),
    deleteOrder: (id) => dispatch(deleteOrder(id)),
    getAllOrdersByUserId: (id) => dispatch(getAllOrdersByUserId(id)),
    getAllOrdersByCompanyId: (id) => dispatch(getAllOrdersByCompanyId(id)),
    updateHandler: (id, order) => dispatch(updateOrder(id, order)),
  };
};
const mapStateToProps = (state) => {
  // console.log(state.orders.allOrders, "popo");
  return {
    orders: state.orders.allOrders,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrder);
