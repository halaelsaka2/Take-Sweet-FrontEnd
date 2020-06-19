import axios from "axios";
const uri = "http://localhost:3000/product";

export const getAllProductsByUserId = async (id) => {
    const {
        data
    } = await axios.get(`${uri}/products/${id}`)
    return data;
}

export const getProductById = async (id) => {
    const {
        data
    } = await axios.get(`${uri}/${id}`)
    return data;
}

export const addProduct = async (product) => {
    const {
        data
    } = await axios.post(`${uri}/addProduct`,product)
    return data;
}

export const deleteProduct = async (id) => {
    const {
        data
    } = await axios.delete(`${uri}/${id}`)
    return data;
}

export const updateProduct = async (id,product) => {
    const {
        data
    } = await axios.patch(`${uri}/${id}`,product)
    return data;
}