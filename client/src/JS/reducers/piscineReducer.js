// Imports
import {
    ADD_PISCINE,
    DELETE_PISCINE,
    EDIT_PISCINE,
    FAIL_PISCINE,
    GET_ALL_PISCINES,
    GET_MY_PISCINES,
    LOAD_PISCINE
  } from "../actionTypes/piscineActionType";
  
  // Initial state
  const initialState = {
    loadP: false,
    myPiscines: [],
    Allpiscines: [],
    piscine: {},
    success: false,
    error: null
  };
  
  // Reducer
  const piscineReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_PISCINE:
        return { ...state, loadP: true, error: null, success: false };
  
      case GET_MY_PISCINES:
        return {
          ...state,
          loadP: false,
          myPiscines: payload,
          success: true,
          error: null
        };
        case GET_ALL_PISCINES:
          return {
            ...state,
            loadP:false,
            Allpiscines:payload,
            success:true,
            error:null
          };
  
        case ADD_PISCINE:
          return {
            ...state,
            loadP: false,
            myPiscines: [...state.myPiscines, payload],
            success: true,
            error: null
          };
  
      case EDIT_PISCINE:
        // console.log("EDIT_PISCINE déclenché :", payload);
        return {
          ...state,
          loadP: false,
          myPiscines: state.myPiscines.map((piscine) =>
            piscine._id === payload._id ? payload : piscine
          ),
          success: true,
          error: null
        };
  
      case DELETE_PISCINE:
          //console.log("DELETE_PISCINE déclenché :", payload);
        return {
          ...state,
          loadP: false,
          myPiscines: state.myPiscines.filter(piscine => piscine._id !== payload.id),
          success: true,
          error: null
        };
  
      case FAIL_PISCINE:
        return {
          ...state,
          loadP: false,
          error: payload,
          success: false
        };
  
      default:
        return state;
    }
  };
  
  export default piscineReducer;
  