import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductReducer";


const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  products: [],
  
  cart: cart ? cart : [],
  fav:  [],
};

const API_URL = "http://localhost:8000";

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
  const removeCart = (id) => {
    const item = state.cart.map(object => object.id).indexOf(id);
    console.log(id.id)
    const newCart = state.cart.splice(item, 1);
    dispatch({
      type: "REMOVE_CART",
      payload: newCart,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  const getProductsByName = async (entrada) => {
    const res = await axios.get(API_URL + `/products/getOneProductByName/${entrada}`);
    dispatch({
      type: "GET_PRODUCTS_BY_NAME",
      payload: res.data,
    });
    return res;
  };

  const getProductByCategory = async (param) => {
    const res = await axios.get(API_URL + `/categories/getCategoryById/${param}`);
    dispatch({
      type: "GET_PRODUCT_BY_CATEGORY",
      payload: res.data,
    });
    return res;
  };
  const orderProductDes = async () => {
    const res = await axios.get(API_URL + '/products/ProductsOrderDesc');
    dispatch({
      type: "ORDER_PRODUCTS_DES",
      payload: res.data,
    });
    return res;
  };
  const orderProductAsc = async () => {
    const res = await axios.get(API_URL + '/products/getProductsOrderedASC');
    dispatch({
      type: "ORDER_PRODUCTS_ASC",
      payload: res.data,
    });
    return res;
  };

  const createfav = async (ProductId ) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post(
        API_URL + "/products/fav",
       {ProductId  },
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
    };
  }
    const createReview = async (ProductId, content ) => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.post(
          API_URL + "/products/review",
         {ProductId, content },
          {
            headers: {
              authorization: token,
            },
          }
        );
  
        dispatch({
          type: "Review",
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
      }
  };
  const deleteReview = async (reviewsid) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      await axios.delete( 
        API_URL + "/products/deleteReview/",
        {
          headers: {
            authorization: token,
          },
        }
      );

    } 
    
    catch (error) {
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
        getProductByCategory,
        orderProductDes,
        orderProductAsc,
        removeCart,
        createReview,
        deleteReview
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
