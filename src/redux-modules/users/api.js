import axios from "axios";


const userEndPoint = "http://localhost:3000/user/login";

export async function UserLogin(user) {
    console.log("hamadaaa", user)
    const response = await axios.post(userEndPoint, user).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }

}