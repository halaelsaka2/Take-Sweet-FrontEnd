import axios from "axios";
const orderEndPoint = "http://localhost:3000/orderProduct/";

export async function AddOrderProduct(newOrderProduct) {
  return axios.post(`${orderEndPoint}addOrderProduct`, newOrderProduct);
}
