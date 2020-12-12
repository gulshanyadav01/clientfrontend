import React from "react"; 
import Client from "./components/Client"
import {Provider} from "react-redux"
import {store} from "./Store/Store"
import DetailClient from "./components/DetailClient"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 

const  App = () =>  {
  return (
    
    <Provider store = {store}>
        <Router>
        <Switch>
            <div className="App">
              <Client/>
              <Route exact path = "/client/detail/:id" component = {DetailClient}/>
            </div>

        </Switch>
        </Router>
    </Provider>
  );
}

export default App;
