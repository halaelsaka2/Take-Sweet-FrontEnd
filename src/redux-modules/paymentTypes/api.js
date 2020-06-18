import axios from "axios";

export const getAllPaymentTypes = async () => {
    const {
        data
    } = await axios.get("http://localhost:3000/payment")
    return data;
}

export const getPaymentTypeById = async (id) => {
    const {
        data
    } = await axios.get(`http://localhost:3000/payment/${id}`)
    return data;
}
export const updatePaymentType = async (id,checked) => {
    console.log(checked,"inaxios");
    
    const {
        data
    } = await axios.patch(`http://localhost:3000/payment/${id}`,{checked})
    return data;
}