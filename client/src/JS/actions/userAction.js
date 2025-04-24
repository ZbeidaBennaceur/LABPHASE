const { LOAD_USER, GET_ALL_USERS, FAIL_USER, DELETE_USER } = require("../actionTypes/userActionType")



export const getUsers=()=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const config={
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result = await axios.get("/api/user/allUsers",config);
        dispatch({
            type:GET_ALL_USERS, payload:result.data.listUsers,
            
        });
        
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data.errors})
        
    }
}



export const deleteUser=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const config={
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result = await axios.delete(`/api/user/${id}`,config);
        dispatch({
            type:DELETE_USER, 
            payload:result.data.UserToDelete,
            
        });
        
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data.errors})
        
    }
}