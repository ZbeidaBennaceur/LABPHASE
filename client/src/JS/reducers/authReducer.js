//imports

const { LOAD_AUTH, SUCCESS_AUTH, FAIL_AUTH, CURRENT_AUTH, LOGOUT_AUTH, CLEAR_SUCCESS_AUTH,CLEAR_ERRORS_AUTH } = require("../actionTypes/authActionTypes");


//initial state
const initialState={
    isLoad:false,
    user:null,
    errors:[],
    success:[],
    isAuth:false,
};


//pure function
const authReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_AUTH:
            return{...state,isLoad:true}
            
        case SUCCESS_AUTH:
            if (payload.token) {
                localStorage.setItem("token", payload.token);
              }
              return {
                ...state,
                isLoad: false,
                user: payload.user || {},
                success: payload.success || [],
                isAuth: true,
                errors: [],
              };
        case FAIL_AUTH:return{...state,
            isLoad:false,
            errors:payload}

        case CURRENT_AUTH:
            return{
            ...state,
            isLoad:false,
            user:payload,
            isAuth:true,
            
        }
        case LOGOUT_AUTH:
            localStorage.removeItem("token")
        return {
            isLoad:false,
            user:null,
            errors:[],
            success:[],
            isAuth:false,
        }
case CLEAR_SUCCESS_AUTH:
return {
    ...state,success:[],
}

case CLEAR_ERRORS_AUTH:
return {
    ...state,errors:[],
}



        default:
            return state;
    }
}

module.exports=authReducer;