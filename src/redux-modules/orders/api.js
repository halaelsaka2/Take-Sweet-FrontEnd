import axios from "axios";

const orderEndPoint = "http://localhost:3000/order/";

export async function GetAllByUserId(id) {
  const response = await axios
    .get(`${orderEndPoint}${id}`)
    .catch((err) => console.log(err.response.data));
  if (response) {
    // console.log(response.data, "dataaaaaaaaaaaaaa");

    return response.data;
  }
}

export async function GetAllByCompanyId(id) {
  const response = await axios
    .get(`${orderEndPoint}orders/${id}`)
    .catch((err) => console.log(err.response.data));
  if (response) {
    console.log(response.data, "dataaaaaaaaaaaaaa");

    return response.data;
  }
}

export async function AddOrder(newOrder) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.post(`${orderEndPoint}addOrder`, newOrder, {
    headers: {
      authorization: token,
    },
  });
}
