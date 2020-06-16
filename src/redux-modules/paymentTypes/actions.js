import * as paymentTypeHandler from "./api.mock";
import {
  GET_ALL_PAYMENT_TYPES,
  GET_PAYMENT_TYPE_BY_ID,
  DELETE_PAYMENT_TYPE,
  EDIT_PAYMENT_TYPE,
  ADD_PAYMENT_TYPE,
} from "./constants";

export const getAllPaymentTypesRes = (paymentTypesList) => {
  return {
    type: GET_ALL_PAYMENT_TYPES,
    paymentTypesList,
  };
};
export const getAllPaymentTypes = () => {
  return async (dispatch) => {
    const paymentTypesList = await paymentTypeHandler.getPaymentTypes();
    console.log(paymentTypesList,"inAction");
    dispatch(getAllPaymentTypesRes(paymentTypesList));
  };
};

export const addPaymentTypeRes = (paymentType) => {
  return { type: ADD_PAYMENT_TYPE, paymentType };
};

export const addPaymentType = (addedPaymentType) => {
  return async (dispatch) => {
    const paymentType = await paymentTypeHandler.addPaymentType(addedPaymentType);
    dispatch(addPaymentTypeRes(paymentType));
  };
};

export const editPaymentTypeRes = (paymentType) => {
  return { type: EDIT_PAYMENT_TYPE, paymentType };
};

export const editPaymentType = (paymentType) => {
  return async (dispatch) => {
    const editedPaymentType = await paymentTypeHandler.editPaymentType(paymentType);
    dispatch(editPaymentTypeRes(editedPaymentType));
  };
};

export const deletePaymentTypetRes = (paymentType) => {
  return { type: DELETE_PAYMENT_TYPE, paymentType };
};

export const deletePaymentType = (paymentType) => {
  return async (dispatch) => {
    const deletedPaymentType = await paymentTypeHandler.deletePaymentType(paymentType);
    dispatch(deletePaymentTypetRes(deletedPaymentType));
  };
};


export const getPaymentTypeByIdRes = (paymentType) => {
  return {
    type: GET_PAYMENT_TYPE_BY_ID,
    paymentType,
  };
};

export const getPaymentTypeById = (id) => {
  return async (dispatch) => {
    const paymentType = await paymentTypeHandler.getPaymentTypeById(id);
    dispatch(getPaymentTypeByIdRes(paymentType));
  };
};

