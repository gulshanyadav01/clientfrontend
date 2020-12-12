
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ADD_CLIENT, DELETE_CLIENT, DETAIL_CLIENT, GET_CLIENTS } from "./Types"
// import {Redirect} from "react-router-dom";


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

export const addClient = (data) =>  dispatch =>  {
    
    const config ={
        headers:{
            "Content-type":"application/json"
        }
    }
    axios.post("http://localhost:5000/client/add", data, config )
    .then(res =>{

        dispatch({
        type: ADD_CLIENT,
        payload: res.data
        })

        
    })
    .catch(err =>{
        console.log(err);
    })
}