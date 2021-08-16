
import {useReducer} from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import axios from "axios";
import { AUTH_AND_LOADING, ERROR_NULL, LODING_TOGGLE, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../Type";



const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: false,
        error: null
    }
    
    // isAuthenticated and loading

    const authAndLoading = () => {
          if(localStorage.token){
              dispatch({
                  type: AUTH_AND_LOADING
              });
          }
    }


    // Login User
    
    const login = async formData => {
        dispatch({
            type:LODING_TOGGLE
        });
        const config = {
             headers: {
                 "Content-Type" : "application/json"
             }
        };

        try {
             const res = await axios.post("/api/auth", formData, config)
             dispatch({
                 type: LOGIN_SUCCESS,
                 payload: res.data
             })
            } catch (err) {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response.data.errors
                })
                setTimeout(() => {
                    dispatch({type: ERROR_NULL })
                }, 5000)
            
        }
    }

    // logout

    const logout = () => {
        dispatch({
            type: LOGOUT
        });
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    return(
        <authContext.Provider
          value={{
              token: state.token,
              isAuthenticated: state.isAuthenticated,
              loading: state.loading,
              error: state.error,
              login,
              logout,
              authAndLoading
          }}
        >

            {props.children}

        </authContext.Provider>
    )
}


export default AuthState;