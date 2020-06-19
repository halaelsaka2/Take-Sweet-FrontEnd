import axios from "axios";


const userEndPoint = "http://localhost:3000/user/";

export async function UserLogin(user) {
    console.log("hamadaaa", user)
    const response = await axios.post(`${userEndPoint}login`, user).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}

export async function UserRegister(user) {
    console.log("hamadaaa", user)
    const response = await axios.post(`${userEndPoint}register`, user).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }

}