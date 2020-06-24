import axios from "axios";

const orderEndPoint = "http://localhost:3000/order/";

export async function GetAllByUserId(id) {
  const response = await axios
    .get(`${orderEndPoint}${id}`)
    .catch((err) => console.log(err.response.data));
  if (response) {

    return response.data;
  }
}

export async function GetAllByCompanyId(id) {
  const response = await axios
    .get(`${orderEndPoint}orders/${id}`)
    .catch((err) => console.log(err.response.data));
  if (response) {
    return response.data;
  }
}

export async function AddOrder(newOrder) {
  const token = JSON.parse(localStorage.getItem("token"));
  const addOrder = await axios.post(`${orderEndPoint}addOrder`, newOrder, {
    headers: {
      authorization: token,
    },
  });
  return addOrder;
}

export async function updateOrder(id, updatedOrder) {
  const token = JSON.parse(localStorage.getItem("token"));
  const {
    data
  } = await axios.patch(`${orderEndPoint}${id}`, updatedOrder, {
    headers: {
      authorization: token,
    },
  });
  return data.order;
}