import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "../ProductContext/ProductReducer";


const API_URL = "http://localhost:8000";
const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: [],
  cart: cart ? cart : [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAll");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };
  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};