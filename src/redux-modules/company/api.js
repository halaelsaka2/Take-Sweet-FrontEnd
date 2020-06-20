import axios from "axios";
const uri = "http://localhost:3000/company";

export const getCompanyById = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    // console.log(token, "tokeninapi")

    const {
        data
    } = await axios.get(`${uri}/getByUserId`, {
        headers: {
            authorization: token,
        }
    })
    // console.log("data", data)
    return data;
}

export const getAllCompanies = async (id) => {
    const {
        data
    } = await axios.get(`${uri}/`)
    return data;
}