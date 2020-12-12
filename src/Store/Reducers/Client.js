// import React, {useState} from 'react'
import { DELETE_CLIENT, DETAIL_CLIENT, GET_CLIENTS } from '../Actions/Types';

const initialState = {

    clients:[
        {id:1, name:"gulshan", email:"gulshany01@gmail.com"},
        {id:2, name:"gulshan", email:"gulshany01@gmail.com"},
        {id:3, name:"gulshan", email:"gulshany01@gmail.com"},
        {id:4, name:"gulshan", email:"gulshany01@gmail.com"},
        {id:5, name:"gulshan", email:"gulshany01@gmail.com"}

    ],
    client:{}
}

const  Client = (state = initialState, action) =>  {
    switch(action.type){
        case GET_CLIENTS:
            return{
                ...state,
                clients: state.clients

            }
        case DETAIL_CLIENT:
            return{
                ...state,
                client:action.payload
            }
        case DELETE_CLIENT:
            return{
                ...state,
                clients: state.clients.filter((client) =>{
                    return(
                        client.id !== action.payload
                    )
                })
            }
        default:
            return state
    }


    
}

export default Client; 
