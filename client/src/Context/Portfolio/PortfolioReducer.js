import {
  CREATE_PORTFOLIO,
  FILTER_DATA,
  GET_PORTFOLIO,
  SET_LOADING,
  CREATE_ERROR,
  CLEAR_SUCCESS,
  CLEAR_ERROR,
} from "../Type";

export default (state, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        filterContent: action.payload,
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolios: action.payload,
        loading: false,
      };
    case CREATE_PORTFOLIO:
      return {
        ...state,
        loading: false,
        success: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ERROR:
        return({
            ...state,
            loading:false,
            error: action.payload
        })
    case CLEAR_SUCCESS:
      return({
          ...state,
          success: action.payload
      })
      case CLEAR_ERROR:
        return({
          ...state,
          error: action.payload
        })
    default:
      break;
  }
};
