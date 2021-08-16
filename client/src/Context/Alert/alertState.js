import { useReducer } from "react"
import alertContext from "./alertContext";
import uuid from "react-uuid";
import { REMOVE_ALERT, SET_ALERT } from "../Type";
import alertReducer from "./alertReducer";


const AlertState = props => {
    const initialState = [];

    const setAlert = (msg, type, timeout=5000) => {
        const id = uuid()
        dispatch({
            type: SET_ALERT,
            payload:{msg, type, id} 
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
            payload: id
        }), timeout)
    }
    const [state, dispatch] = useReducer(alertReducer, initialState);
    return (
        <alertContext.Provider
         value={{
             alerts: state,
             setAlert
         }}   
        >
         {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;