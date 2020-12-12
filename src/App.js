import React from "react"; 
import Client from "./components/Client"
import {Provider} from "react-redux"
import {store} from "./Store/Store"
import DetailClient from "./components/DetailClient"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import AddClient from "./components/AddClient"

const  App = () =>  {
  return (
    
    <Provider store = {store}>
        <Router>
        <Switch>
            <div className="App" style = {{backgroundColor:"#15192A", height:"100vh", color:"white", font:"bold"}}>
              <Route exact path = "/" component = {Client} />
              <Route exact path = "/client/detail/:id" component = {DetailClient}/>
              <Route exact path = "/client/add" component = {AddClient}/>
            </div>

        </Switch>
        </Router>
    </Provider>
  );
}

export default App;
