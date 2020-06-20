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

export async function updateUser(updatedUser) {
    console.log(updatedUser);
    
    const token = JSON.parse(localStorage.getItem("token"))
    const response = await axios.patch(`${userEndPoint}`,updatedUser,{
        headers: {
            authorization: token,
        }
    }).catch((err) => console.log(err.response.data));
    if (response) {
        console.log(response.data,"inApi");
        
        return response.data;
    }
}