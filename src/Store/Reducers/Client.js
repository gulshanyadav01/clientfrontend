// import React, {useState} from 'react'
import { GET_CLIENTS } from '../Actions/Types';

const initialState = {

    clients:[
        {id:1, name:"gulshan", email:"gulshany01@gmail.com"}
    ]
}

const  Client = (state = initialState, action) =>  {
    switch(action.type){
        case GET_CLIENTS:
            return{
                ...state,
                clients: state.clients

            }
        default:
            return state
    }


    
}

export default Client; 
