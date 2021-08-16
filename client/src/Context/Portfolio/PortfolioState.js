import { useReducer } from "react";
import PortfolioContent from "../Portfolio/PortfolioContext";
import PortfolioReducer from "./PortfolioReducer";
import layout from "../../img/service/layout.png";
import {
  FILTER_DATA,
  GET_PORTFOLIO,
  CREATE_PORTFOLIO,
  SET_LOADING,
  CREATE_ERROR,
  CLEAR_ERROR,
  CLEAR_SUCCESS
} from "../Type";
import axios from "axios";
const PortfolioState = (props) => {
  const initialState = {
    portfolios: [],
    filterContent: null,
    loading: false,
    success: null,
    error: null,
  };

  const [state, dispatch] = useReducer(PortfolioReducer, initialState);

  const filter = (category) => {
    const filteredData = state.portfolios.filter((item) => {
      return item.category === category;
    });
    dispatch({
      type: FILTER_DATA,
      payload: filteredData,
    });
  };
  const createPortfolio = async (formData) => {
    dispatch({
      type: SET_LOADING,
    });
    try {
      const res = await axios.post("/api/portfolio", formData);
      dispatch({
        type: CREATE_PORTFOLIO,
        payload: res.data,
      });
      setTimeout(() => {
        dispatch({
          type:CLEAR_SUCCESS,
          payload: null
        })
      }, 5000);
    } catch (err) {
        dispatch({
            type: CREATE_ERROR,
            payload: err.response.data.error
        })
        
        setTimeout(() => {
          dispatch({
            type:CLEAR_ERROR,
            payload: null
          })
        }, 5000);
    }
  };

  // Get all the portfolio content

  const getPortfolio = async () => {
    try {
      const res = await axios.get("/api/portfolio");
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_ERROR,
        payload: err.response
    })
    
    setTimeout(() => {
      dispatch({
        type:CLEAR_ERROR,
        payload: null
      })
    }, 5000);
    }
  };

  return (
    <PortfolioContent.Provider
      value={{
        portfolios: state.portfolios,
        filterContent: state.filterContent,
        loading: state.loading,
        success: state.success,
        error: state.error,
        filter,
        createPortfolio,
        getPortfolio,
      }}
    >
      {props.children}
    </PortfolioContent.Provider>
  );
};

export default PortfolioState;
