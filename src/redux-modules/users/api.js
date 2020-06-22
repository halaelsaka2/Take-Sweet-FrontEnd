import axios from "axios";


const userEndPoint = "http://localhost:3000/user/";

export async function UserLogin(user) {
    console.log("hamadaaa", user)
    const response = await axios.post(`${userEndPoint}login`, user).catch((err) => console.log(err.response.data));
    if (response) {
        console.log(response.data, "response in api login")
        return response.data;
    }

}

export function UserRegister(user) {
    console.log("hamadaaa register", user)
    // const response = await axios.post(`${userEndPoint}register`, user).catch((err) => console.log(err.response.data));
    // if (response) {
    //     console.log(response.data, "response in api register")
    //     return response.data;
    // }

    return axios.post(`${userEndPoint}register`, user);

}

export async function updateUser(updatedUser) {
    console.log(updatedUser);

    const token = JSON.parse(localStorage.getItem("token"))
    const response = await axios.patch(`${userEndPoint}`, updatedUser, {
        headers: {
            authorization: token,
        }
    }).catch((err) => console.log(err.response.data));
    if (response) {
        console.log(response.data, "inApi");

        return response.data;
    }
}


export async function GetUserById(id) {

    const response = await axios.get(`${userEndPoint}/${id}`).catch((err) => console.log(err.response.data));
    if (response) {
        console.log(response.data, "userById");
        return response.data;
    }
}
