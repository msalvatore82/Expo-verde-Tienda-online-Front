import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "../ProductContext/ProductReducer";

const API_URL = "http://localhost:8000";
const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: [],
  cart: cart ? cart : [],
  fav: [],
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
  const getProductsByName = async () => {
    const res = await axios.get(API_URL + "/products/getOneProductByName/");
    dispatch({
      type: "GET_PRODUCT_BY_NAME",
      payload: res.data,
    });
    return res;
  };

  const createfav = async (product) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post(
        API_URL + "/products/fav",
        product,
        {product },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({
        type: "FAV",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        fav: state.fav,
        getProducts,
        addCart,
        clearCart,
        getProductsByName,
        createfav,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
