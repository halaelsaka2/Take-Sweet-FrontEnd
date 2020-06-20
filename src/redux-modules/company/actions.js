import * as companiesHandler from "./api.mock";
import * as companiesDB from "./api";
import {
  GET_ALL_Companies,
  GET_Company_BY_ID,
  DELETE_Company,
  EDIT_Company,
  ADD_Company,
} from "./constants";
import axios from "axios";

export const getAllCompaniesRes = (companies) => {
  return {
    type: GET_ALL_Companies,
    companies,
  };
};
export const getAllCompanies = () => {
  return async (dispatch) => {
    const companies = await companiesDB.getAllCompanies();

    dispatch(getAllCompaniesRes(companies));
  };
};

export const addCompany = (addedCompany) => {
  return async (dispatch) => {
    // const company = await companiesHandler.addCompany(addedCompany);
    const company = await axios.post(
      "http://localhost:3000/company/addCompany",addedCompany
    );
    dispatch(addCompanyRes(company));
  };
};
export const addCompanyRes = (company) => {
  return {
    type: ADD_Company,
    company
  };
};

export const editCompany = (company) => {
  return async (dispatch) => {
    // const editedCompany = await companiesHandler.editCompany(company);
    const editedCompany = await axios.patch(
      "http://localhost:3000/company/5ee3bdf4156a380df0236ad8"
    );
    dispatch(editCompanyRes(editedCompany));
  };
};
export const editCompanyRes = (company) => {
  return {
    type: EDIT_Company,
    company
  };
};

export const deleteCompany = (company) => {
  return async (dispatch) => {
    const deletedCompany = await companiesHandler.deleteCompany(company);
    // const company = await axios.delete(
    //   "http://localhost:3000/company/5ee3bdf4156a380df0236ad8"
    // );
    dispatch(deleteCompanyRes(deletedCompany));
  };
};
export const deleteCompanyRes = (company) => {
  return {
    type: DELETE_Company,
    company
  };
};

export const getCompanyById = () => {
  return async (dispatch) => {
    const company = await companiesDB.getCompanyById()
    // console.log(company, "inAction")
    dispatch(getCompanyByIdRes(company));
  };
};
export const getCompanyByIdRes = (company) => {
  return {
    type: GET_Company_BY_ID,
    company,
  };
};