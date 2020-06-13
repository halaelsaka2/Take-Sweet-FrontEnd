import * as productsHandler from "./api.mock";
import * as actionTypes from "./constants";

export const getAllProductsRes = (productsList) => {
  return {
    type: actionTypes.GET_ALL_PRODUCTS,
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

export const getSortListRes = (sortList) => {
  return {
    type: actionTypes.GET_SORT_BY_LIST,
    sortList,
  };
};
export const getSortList = () => {
  return async (dispatch) => {
    const sortList = await productsHandler.getSortList();
    dispatch(getSortListRes(sortList));
  };
};

export const getCategoryListRes = (categoryList) => {
  return {
    type: actionTypes.GET_CATEGORY_LIST,
    categoryList,
  };
};
export const getCategoryList = () => {
  return async (dispatch) => {
    const categoryList = await productsHandler.getCategoryList();
    dispatch(getCategoryListRes(categoryList));
  };
};

// export const getProductById = () => {
//   type: GET_PRODUCT_BY_ID;
// };
// export const deleteProductById = () => {
//   type: DELETE_PRODUCT_BY_ID;
// };
// export const editProductById = () => {
//   type: EDIT_PRODUCT_BY_ID;
// };
