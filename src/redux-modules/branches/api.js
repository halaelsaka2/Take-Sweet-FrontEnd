import axios from "axios";


const branchEndPoint = "http://localhost:3000/branch/";

export async function GetAllBranches() {
    const {
        data
    } = await axios.get(rolesEndPoint);
    return data;
}

export async function GetBranchById(id) {
    const {
        data
    } = await axios.get(`${rolesEndPoint}/${id}`);
    return data;
}

export async function AddBranch(addedBranch) {
    const {
        data
    } = await axios.post(`${rolesEndPoint}/addBranch`, addedBranch);
    return data;
}

export async function EditBranch(id, editedBranch) {
    const {
        data
    } = await axios.patch(`${rolesEndPoint}/${id}`, editedBranch);
    return data;
}

export async function DeleteBranch(id) {
    const {
        data
    } = await axios.delete(`${rolesEndPoint}/${id}`);
    return data;
}