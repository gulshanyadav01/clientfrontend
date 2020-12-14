import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from "../Actions/Types"


const initialState  = {
    token:null,
    error: null,
    loading: true

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                token: localStorage.getItem("token"),
                error: null,
                loading: false
            }
        case REGISTER_FAIL:
        
            return{
                ...state,
                token: null,
                error:action.payload,
                loading: false
                }
    
        default:
            return state;
    }
}

export default authReducer; 