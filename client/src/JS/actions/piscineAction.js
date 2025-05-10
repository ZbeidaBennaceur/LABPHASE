import axios from 'axios';
import {
  ADD_PISCINE,
  DELETE_PISCINE,
  EDIT_PISCINE,
  FAIL_PISCINE,
  GET_ALL_PISCINES,
  GET_MY_PISCINES,
  LOAD_PISCINE
} from '../actionTypes/piscineActionType';

// GET - Mes devis piscine
export const getMyPiscines = () => async (dispatch) => {
  dispatch({ type: LOAD_PISCINE });
  
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/piscines/mesPiscines", config)
   // console.log(result.data)
    dispatch({ type: GET_MY_PISCINES, payload: result.data.MyPiscines });
  } catch (error) {
    dispatch({
      type: FAIL_PISCINE,
      payload: error.response?.data || error.message,
    });
  }
  
};


// GET - Tous les devis
export const getAllpiscines = () => async (dispatch) => {
  dispatch({ type: LOAD_PISCINE });
  
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/piscines", config)
   dispatch({ type: GET_ALL_PISCINES, payload: result.data.Allpiscines });
  } catch (error) {
    dispatch({
      type: FAIL_PISCINE,
      payload: error.response?.data || error.message,
    });
  }
  
};




//PUT - Modifier un devis
export const editPiscine = (id, piscineToEdit) => async (dispatch) => {
  dispatch({ type: LOAD_PISCINE });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.put(`/api/piscines/${id}`, piscineToEdit, config);
   // console.log(result.data)
  // console.log("Données envoyées à l'API :", piscineToEdit);

    dispatch({ type: EDIT_PISCINE, payload: result.data.piscine });
     dispatch(getMyPiscines());
  } catch (error) {
  console.error("Erreur côté serveur :", error.response?.data);
  dispatch({
    type: FAIL_PISCINE,
    payload: error.response?.data || error.message,
  });
}
};


//DELETE - Supprimer un devis
export const deletePiscine=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PISCINE})
    try {
        let config={
            headers:{authorization:localStorage.getItem("token") }
        }
        const result=await axios.delete(`/api/piscines/${id}`,config)
        console.log("Réponse serveur :", result.data);
       dispatch({ type: DELETE_PISCINE, payload: { id } });
        dispatch(getMyPiscines())
        
    } catch (error) {
        dispatch({type:FAIL_PISCINE,payload:error.response.data})
    }
}



// POST - Ajouter un devis
export const createPiscine = (data) => async (dispatch) => {
// console.log("createPiscine",data);
  dispatch({ type: LOAD_PISCINE });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };

    const result = await axios.post('/api/piscines/addPiscine', data, config);
   //console.log("REPONSE SERVEUR :", result.data);
    dispatch({ type: ADD_PISCINE, payload: result.data.newPiscine });
    
  } catch (error) {
    dispatch({
      type: FAIL_PISCINE,
      payload: error.response?.data || error.message,
      
    });
    console.error("❌ ERREUR createPiscine :", error.response?.data || error.message);
  }
};