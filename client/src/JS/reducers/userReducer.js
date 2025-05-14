import { GET_ALL_USERS, LOAD_USER,DELETE_USER,FAIL_USER} from "../actionTypes/userActionType";






const initialState={
    usersList:[],
    users:[],
    isLoad:false,
    errors:[],
    success:[],
};


//pure function
const userReducer=(state=initialState,{type,payload})=> {
    switch (type) {
        case LOAD_USER: return{...state, isLoad:true}
        case GET_ALL_USERS: 
       // console.log(payload)
        return{...state,
            isLoad:false,
            usersList:payload, 
            success:true}
        case DELETE_USER: 
        const newList=state.usersList.filter((el)=>el._id !== payload);
        return {
            ...state,
            isLoad:false,
            usersList:newList,
            success:payload.success,
        }
         case FAIL_USER:return{...state,isLoad:false,errors:payload}


    default:return state;
       
    }
}
export default userReducer
