import axios from "axios";

const branchEndPoint = "http://localhost:3000/branch/";

export async function GetAllBranches() {
    const response = await axios.get(branchEndPoint).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}

export async function GetBranchById(id) {
    const response = await axios.get(`${branchEndPoint}/${id}`).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}

export function AddBranch(addedBranch) {
    return axios.post(`${branchEndPoint}/addBranch`, addedBranch);
}

export async function EditBranch(id, editedBranch) {
    const {
        data: {
            branch
        }
    } = await axios.patch(`${branchEndPoint}/${id}`, editedBranch);
    return branch;
}

export async function DeleteBranch(id) {
    const response = await axios.delete(`${branchEndPoint}/${id}`).catch((err) => console.log(err.response.data));
    if (response) {
        return response.data;
    }
}