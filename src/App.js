import React from "react"; 
import Client from "./components/Client"
import {Provider} from "react-redux"
import {store} from "./Store/Store"
import DetailClient from "./components/DetailClient"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import AddClient from "./components/AddClient"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"

const  App = () =>  {
  return (
    
    <Provider store = {store}>
        <Router>
        <Switch>
            <div className="App" style = {{backgroundColor:"#0E1122", height:"100vh", color:"white", font:"bold"}}>
              <Route exact path = "/" component = {Layout}/>
              <Route exact path = "/client/detail/:id" component = {DetailClient}/>
              <Route exact path = "/client/add" component = {AddClient}/>
            </div>

        </Switch>
        </Router>
    </Provider>
  );
}

export default App;
