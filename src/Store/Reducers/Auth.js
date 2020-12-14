import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from "../Actions/Types"


const initialState  = {
    token:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log("auth reducer")
            return state;
    
        default:
            return state;
    }
}

export default authReducer; 