import * as productsHandler from "./api.mock";

import { uploadImageFile, addNewProduct } from "./api";
import * as productsDB from "./api";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  UPLOAD_IMAGE,
  EDIT_Amount,
} from "./constants";

export const getAllProductsByUserIdRes = (productsList) => {
  return {
    type: GET_ALL_PRODUCTS,
    productsList,
  };
};
export const getAllProductsByUserId = (id) => {
  return async (dispatch) => {
    const productsList = await productsDB.getAllProductsByUserId(id);
    console.log(productsList, "in actioooooooooooooon");
    dispatch(getAllProductsByUserIdRes(productsList));
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const newproduct = await addNewProduct(product);

    dispatch(addProductRes(newproduct));
  };
};

export const addProductRes = (product) => {
  return { type: ADD_PRODUCT, product };
};

export const editProduct = (id, product) => {
  return async (dispatch) => {
    const { newproducts } = await productsDB.updateProduct(id, product);
    dispatch(editProductRes({ newproducts }));
  };
};

export const editProductRes = (newproducts) => {
  return { type: EDIT_PRODUCT, newproducts };
};
export const editAmount = (product) => {
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
    const product = await productsDB.getProductById(id);
    dispatch(getProductByIdRes(product));
  };
};
export const getProductByIdRes = (product) => {
  return {
    type: GET_PRODUCT_BY_ID,
    product,
  };
};

export const uploadImage = (image) => {
  return async (dispatch) => {
    const { imageUrl } = await uploadImageFile(image);
    console.log(imageUrl);
    dispatch(uploadImageRes(imageUrl));
  };
};

export const uploadImageRes = (imageSrc) => {
  console.log(imageSrc);
  return {
    type: UPLOAD_IMAGE,
    imageSrc,
  };
};
