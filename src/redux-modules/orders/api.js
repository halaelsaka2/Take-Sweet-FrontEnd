import axios from "axios";

const orderEndPoint = "http://localhost:3000/order/";

// export async function GetAllRoles() {
//     const {
//         data
//     } = await axios.get(rolesEndPoint);
//     return data;
// }

// export async function GetRoleById(id) {
//     const {
//         data
//     } = await axios.get(`${rolesEndPoint}${id}`);
//     return data;
// }
export async function AddOrder(newOrder) {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.post(`${orderEndPoint}addOrder`, newOrder, {
    headers: {
      authorization: token,
    },
  });
}
