import * as productsHandler from "./api.mock";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_ALL_BRANDS,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
} from "./constants";

export const getAllProductsRes = (productsList) => {
  return {
    type: GET_ALL_PRODUCTS,
    productsList,
  };
};
export const getAllProducts = () => {
  return async (dispatch) => {
    const productsList = await productsHandler.getAllProducts();
    console.log(productsList);
    dispatch(getAllProductsRes(productsList));
  };
};

export const getAllBrandsRes = (brandsList) => {
  return {
    type: GET_ALL_BRANDS,
    brandsList,
  };
};
export const getAllBrands = () => {
  return async (dispatch) => {
    const brandsList = await productsHandler.getAllBrands();
    dispatch(getAllBrandsRes(brandsList));
  };
};

export const addProduct = (addedProduct) => {
  return async (dispatch) => {
    const product = await productsHandler.addProduct(addedProduct);
    dispatch(addProductRes(product));
  };
};

export const addProductRes = (product) => {
  return { type: ADD_PRODUCT, product };
};

export const editProduct = (product) => {
  return async (dispatch) => {
    const editedProduct = await productsHandler.editproduct(product);
    dispatch(editProductRes(editedProduct));
  };
};
export const editProductRes = (editedProduct) => {
  return { type: EDIT_PRODUCT, editedProduct };
};
