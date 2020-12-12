import { createStore , applyMiddleware } from "redux"; 
import {composeWithDevtools} from "redux-devtools-extension"
import thunk from "redux-thunk";

import rootreducer from "./Reducers/ClientReducer"; 

const middleware = [thunk]; 

export const store = createStore(rootreducer, composeWithDevtools(applyMiddleware(...middleware))); 