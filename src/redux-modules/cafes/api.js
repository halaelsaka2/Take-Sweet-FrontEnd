import axios from 'axios'
const url = "http://localhost:3000/cafe";

export const getAllCafes = async () => {
    const {
        data
    } = await axios.get(`${url}/`)
    return data;
}

export const addCafe = async (cafe) => {
    const {
        data
    } = await axios.post(`${url}/addCafe`, cafe)
    return data;
}
export const editCafe = async (id, cafe) => {
    const {
        data
    } = await axios.patch(`${url}/${id}`, cafe)
    return data;
}
export const getCafeByUserId = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const {
        data
    } = await axios.get(`${url}/getByUserId`, {
        headers: {
            authorization: token,
        }
    })
    console.log(data);
    
    return data;
}