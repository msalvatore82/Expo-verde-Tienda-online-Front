const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
        case "GET_PRODUCTS_BY_NAME":
        return {
          ...state,
          products: action.payload,
        };
        case "GET_PRODUCT_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
      };
      case "ORDER_PRODUCTS_DES":
      return {
        ...state,
        products: action.payload,
      };
      case "ORDER_PRODUCTS_ASC":
      return {
        ...state,
        products: action.payload,
      };
      case "ADD_CART":
        return {
          ...state,
          cart: [action.payload, ...state.cart],
        };
        case "REMOVE_CART":
        return {
          ...state,
          cart: state.cart,
        };
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
  
  export default products;


  