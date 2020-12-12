
import axios from "axios";
import { DELETE_CLIENT, DETAIL_CLIENT, GET_CLIENTS } from "./Types"


export const getClients =() => async dispatch => {
    const res = await axios.get("http://localhost:5000/client/getclients");
    // console.log(res.data.clients);
    dispatch({
        type:GET_CLIENTS,
        payload:res.data.clients
    })
}

export const detailClient = (id) => {
    return {
        type:DETAIL_CLIENT,
        payload:id
    }
}


export const deleteClient = (id) => {
    return{
        type: DELETE_CLIENT,
        payload: id 
    }
}