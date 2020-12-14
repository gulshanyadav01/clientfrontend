import { combineReducers } from "redux"; 
import Client from "./Client"
import authReducer from "./Auth"

export default combineReducers({
    client: Client,
    auth: authReducer
})