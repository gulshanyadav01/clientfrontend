
import DetailClient from "../../components/DetailClient"
import { DELETE_CLIENT, DETAIL_CLIENT, GET_CLIENTS } from "./Types"


export const getClients =() => {
    return{
        type:GET_CLIENTS
    }
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