import axios from "axios";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from "./Types"

export const registerUser = (data) => async dispatch => {
    
    try{
    const {name, email, password} = data; 
    const newUser = {
        name,
        email,
        password
    }
        
        const res = await axios.post("http://localhost:5000/user/signup", newUser);
        console.log(res.data.msg);

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })



    }catch(res){
        // console.log(res.data.msg)
        dispatch({
            type:REGISTER_FAIL,
            payload:res.msg
        })
    }
}


export const logout = ()  =>  dispatch  => {
    console.log("hi i am logout action")
    try{
        
        dispatch({
            type:LOGOUT,
        })


    }catch(error){
        console.log(error);
    }
}