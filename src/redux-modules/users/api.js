import axios from "axios";


const userEndPoint = "http://localhost:3000/user/";

export async function UserLogin(user) {
    const response = await axios.post(`${userEndPoint}login`, user).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }

}

export function UserRegister(user) {
    return axios.post(`${userEndPoint}register`, user);
}

export async function updateUser(updatedUser) {
    const token = JSON.parse(localStorage.getItem("token"))
    const response = await axios.patch(`${userEndPoint}`, updatedUser, {
        headers: {
            authorization: token,
        }
    }).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}


export async function GetUserById(id) {

    const response = await axios.get(`${userEndPoint}/${id}`).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}