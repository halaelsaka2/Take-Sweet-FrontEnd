import * as actionTypes from "./constants";
import {
  uploadImage
} from "./actions";

const initialState = {
  productsList: [],
  sortList: [],
  categoryList: [],
  imageSrc: "",
  product: {},
  editedProduct: "",
  dealsProductsList: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      console.log(action.productsList);
      return {
        ...state,
        productsList: action.productsList,
      };
    case actionTypes.ADD_PRODUCT:
      const productsList = [...state.productsList, action.product];
      console.log(productsList, "in Addproduct Reducer");
      return {
        ...state,
        productsList,
      };
    case actionTypes.DELETE_PRODUCT:
      const newproductsList = state.productsList.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        productsList: newproductsList,
      };
    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        editedProduct: action.product,
      };
    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.EDIT_Amount:
      const oldproduct = state.productsList.find(
        (product) => product.id === action.product.id
      );
      const index = state.productsList.indexOf(oldproduct);
      const productList = [...state.productsList];
      productList[index] = action.product;
      return {
        ...state,
        productsList: productList,
      };

    case actionTypes.Edit_DEALS:
      const oldDeal = state.dealsProductsList.find(
        (product) => product.id === action.product.id
      );
      // console.log("id in reducer", oldDeal.id)
      const dealIndex = state.dealsProductsList.indexOf(oldDeal);
      const dealsProductsList = [...state.dealsProductsList];
      dealsProductsList.pop(dealIndex)
      return {
        ...state,
        dealsProductsList: dealsProductsList
      }

      case actionTypes.UPLOAD_IMAGE:
        return {
          ...state,
          imageSrc: action.imageSrc,
        };

      case actionTypes.GET_DEALS:
        return {
          ...state,
          dealsProductsList: action.dealsProductsList
        }
        // case actionTypes.ADD_PRODUCT:
        // const productsList = [...state.productsList];
        // productsList.push(action.product);
        // return {
        //   ...state,
        //   productsList,
        // };

        default:
          return state;
  }
};