import axios from "axios";


const rolesEndPoint = "http://localhost:3000/role/";

export async function GetAllRoles() {
    const {
        data
    } = await axios.get(rolesEndPoint);
    return data;
}