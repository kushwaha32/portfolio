import {
  ADD_CONTACT,
  ADD_CONTACT_ERROR,
  CLEAR_SUCCESS,
  ERROR_NULL,
  GET_CONTACT,
  LOADING_CONTACT,
  REMOVE_ITEM,
} from "../Type";

export default (state, action) => {
  switch (action.type) {
    case LOADING_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACT:
      return {
        ...state,
        constacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        loading:false,
        constacts: state.constacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case ADD_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ERROR_NULL:
      return {
        ...state,
        errors: null,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
};
