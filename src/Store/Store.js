import { createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"; 

import client from "./Reducers/Client"; 

const middleware = [thunk]; 


export const store = createStore(client  ,composeWithDevTools(applyMiddleware(...middleware))); 