import {
  AUTH_AND_LOADING,
  ERROR_NULL,
  LODING_TOGGLE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../Type";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_AND_LOADING:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LODING_TOGGLE:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ERROR_NULL:
      return {
        ...state,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
