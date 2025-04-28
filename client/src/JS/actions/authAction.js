//imports
import axios from 'axios'
import { CURRENT_AUTH, LOAD_AUTH, LOGOUT_AUTH,SUCCESS_AUTH,FAIL_AUTH, CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH } from "../actionTypes/authActionTypes"


//action register
export const register=(newUser,navigate)=>async(dispatch)=>{
    dispatch ({type:LOAD_AUTH})
    try {
       const result=await axios.post("/api/auth/register",newUser)
        dispatch({type:SUCCESS_AUTH,payload:result.data});
        navigate("/profile")

    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
    }
};

//action login
export const login=(user,navigate)=>async(dispatch)=>{

    dispatch({type:LOAD_AUTH});
   
    try {
        const result=await axios.post('/api/auth/login',user)
        dispatch({ type: SUCCESS_AUTH, payload: result.data })
        navigate("/profile")
      // console.log(result.data);

    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
       
    }
}


//action current
export const current=()=>async(dispatch)=>{
    dispatch({type:LOAD_AUTH});
    try {
        let config={
            headers:{
                authorization:localStorage.getItem("token"),
                }
        };
        const result=await axios.get("/api/auth/current",config);
        dispatch({type:CURRENT_AUTH,payload:result.data});
       // console.log("payload current() :", result.data);
        
    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
    }
    
};

//action logout
export const logout=()=>(dispatch)=>{
    localStorage.removeItem("token");
    dispatch({type:LOGOUT_AUTH})
}


export const clearError=()=>{
    return {
        type:CLEAR_ERRORS_AUTH
    }
}

export const clearSuccess=()=>{
    return {
        type:CLEAR_SUCCESS_AUTH
    }
}