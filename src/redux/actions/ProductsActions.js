import { ActionTypes } from "../contants/ActionTypes";
import fakestoreApi from "../../components/pages/api/fakestoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (theProduct) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: theProduct,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
