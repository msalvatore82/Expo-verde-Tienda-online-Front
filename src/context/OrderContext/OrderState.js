import { createContext } from "react";
import axios from "axios";

const initialState = {
  orders: [],
};
const API_URL = "http://localhost:8000";

export const OrderContext = createContext(initialState);
export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    const productIds = order.map((item) => item.id);

    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.post(
      API_URL + "/orders/createOrder",
      { ProductId: productIds },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
