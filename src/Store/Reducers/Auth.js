import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_PROFILE
} from "../Actions/Types"


const initialState  = {
    token:null,
    error: null,
    loading: true,
    user:null

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
                return{
                    ...state,
                    token: localStorage.getItem("token"),
                    error: null,
                    loading: false,
                }
        case USER_PROFILE:
            return{
                ...state,
                user:action.payload.user,
                error:null
                
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return{
                ...state,
                token: null,
                error:action.payload,
                loading: false
            }
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                error:null,
                loading:false,
                user:null

            }
    
        default:
            return state;
    }
}

export default authReducer; 