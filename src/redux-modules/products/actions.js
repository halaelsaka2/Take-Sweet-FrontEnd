import * as productsHandler from "./api.mock";
import * as productsDB from "./api";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  EDIT_Amount,
} from "./constants";

export const getAllProductsRes = (productsList) => {
  return {
    type: GET_ALL_PRODUCTS,
    productsList,
  };
};
export const getAllProducts = () => {
  return async (dispatch) => {
    const productsList = await productsDB.getAllProducts();
    console.log(productsList);
    dispatch(getAllProductsRes(productsList));
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const newproduct = await productsDB.addProduct(product);
    dispatch(addProductRes(newproduct));
  };
};

export const addProductRes = (product) => {
  return { type: ADD_PRODUCT, product };
};

export const editProduct = (id,product) => {
  return async (dispatch) => {
    const {newproducts} = await productsDB.updateProduct(id,product);
    dispatch(editProductRes({newproducts}));
  };
};

export const editProductRes = (newproducts) => {
  return { type: EDIT_PRODUCT, newproducts };
};
export const editAmount= (product) => {
  return { type: EDIT_Amount, product };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    const deletedProduct = await productsDB.deleteProduct(id);
    dispatch(deleteProductRes(deletedProduct));
  };
};
export const deleteProductRes = (product) => {
  return { type: DELETE_PRODUCT, product };
};

export const getPorductById = (id) => {
  return async (dispatch) => {
    console.log(id,"inAction");
    const product = await productsDB.getProductById(id);
    dispatch(getPorductByIdRes(product));
  };
};
export const getPorductByIdRes = (product) => {
  return {
    type: GET_PRODUCT_BY_ID,
    product,
  };
};
