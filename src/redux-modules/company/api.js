import axios from "axios";
const uri = "http://localhost:3000/company";

export const getCompanyById = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const {
        data
    } = await axios.get(`${uri}/getByUserId`, {
        headers: {
            authorization: token,
        }
    })
    return data;
}

export const getAllCompanies = async (id) => {
    const {
        data
    } = await axios.get(`${uri}/`)
    return data;
}

export const addCompany = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const {
        data
    } = await axios.post(`${uri}/addCompany`, {}, {
        headers: {
            authorization: token,
        }
    })
    return data;
}