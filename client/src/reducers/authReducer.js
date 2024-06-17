import { FETCH_USER } from "../actions/types";

const primaryState = {
  isLoggedIn: null,
};

const authReducer = (state = primaryState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isLoggedIn: action.payload || false };
    default:
      return state;
  }
};

export default authReducer;
