import React from "react"; 
import Client from "./components/Client"
import {Provider} from "react-redux"
import {store} from "./Store/Store"


const  App = () =>  {
  return (
    <Provider store = {store}>
    <div className="App">
     <Client/>
    </div>
    </Provider>
  );
}

export default App;
