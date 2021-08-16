import axios from "axios";
import { useReducer } from "react";
import {
  ADD_CONTACT,
  ADD_CONTACT_ERROR,
  CLEAR_SUCCESS,
  ERROR_NULL,
  GET_CONTACT,
  LOADING_CONTACT,
  REMOVE_ITEM,
} from "../Type";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import setAuthToken from "../../utils/setAuthToken";

const ContactState = (props) => {
  const initialState = {
    constacts: null,
    loading: false,
    errors: null,
    success: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get contacts from the database

  const getContact = async () => {
    dispatch({
      type: LOADING_CONTACT,
    });

    try {
      const res = await axios.get("/api/contact");
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      });
    } catch (err) {}
  };

  //  Add contact to the database

  const addContact = async (formData) => {
    dispatch({
      type: LOADING_CONTACT,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contact", formData, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data.msg,
      });

      setTimeout(() => {
        dispatch({
          type: CLEAR_SUCCESS,
        });
      }, 5000);
    } catch (err) {
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: err.response.data.errors,
      });

      setTimeout(() => {
        dispatch({
          type: ERROR_NULL,
        });
      }, 5000);
    }
  };

  // Delete contact

  const deleteContact = async (id) => {
    dispatch({
      type: LOADING_CONTACT,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.delete(`/api/contact/${id}`, config);
      dispatch({
        type: REMOVE_ITEM,
        payload: id,
      });
    } catch (err) {}
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.constacts,
        loading: state.loading,
        errors: state.errors,
        success: state.success,
        addContact,
        getContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
