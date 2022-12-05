const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,

        token: action.payload.token,
      };
      case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };
      case "LOGOUT":
      return {
        ...state,
        user: null,
        token:null
      };
      case "ADD_USER":
      return {
        ...state,
        message: action.payload.message
      };

    default:
      return state;
  }
};

export default users;
