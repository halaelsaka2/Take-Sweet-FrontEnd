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

export const addProduct = (product) => {
  return async (dispatch) => {
    const newproduct = await productsHandler.addProduct(product);
    dispatch(addProductRes(newproduct));
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
export const editProductRes = (product) => {
  return { type: EDIT_PRODUCT, product };
};
export const deleteProduct = (product) => {
  return async (dispatch) => {
    const deletedProduct = await productsHandler.deleteProduct(product);
    dispatch(deleteProductRes(deletedProduct));
  };
};
export const deleteProductRes = (product) => {
  return { type: DELETE_PRODUCT, product };
};

export const getPorductById = (id) => {
  return async (dispatch) => {
    const product = await productsHandler.getProductById(id);
    dispatch(getPorductByIdRes(product));
  };
};
export const getPorductByIdRes = (product) => {
  return {
    type: GET_PRODUCT_BY_ID,
    product,
  };
};
