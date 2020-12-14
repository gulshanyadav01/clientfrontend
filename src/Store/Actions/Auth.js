import axios from "axios";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS
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
        // console.log(res.data.token);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })



    }catch(eror){
        console.log(eror);
    }
}