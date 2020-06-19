import axios from "axios";
import { editBranch } from "./actions";


const branchEndPoint = "http://localhost:3000/branch/";

export async function GetAllBranches() {
    const {
        data
    } = await axios.get(branchEndPoint);
    return data;
}

export async function GetBranchById(id) {
    const {
        data
    } = await axios.get(`${branchEndPoint}/${id}`);
    return data;
}

export async function AddBranch(addedBranch) {
    const {
        data
    } = await axios.post(`${branchEndPoint}/addBranch`, addedBranch);
    return data;
}

export async function EditBranch(id, editedBranch) {
    const {
        data:{branch}
    } = await axios.patch(`${branchEndPoint}/${id}`, editedBranch);
    console.log(branch,"inApi");
    
    return branch;
}

export async function DeleteBranch(id) {
    const {
        data
    } = await axios.delete(`${branchEndPoint}/${id}`);
    return data;
}