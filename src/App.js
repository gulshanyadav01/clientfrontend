import React from "react"; 
// import Client from "./components/Client"
import {Provider} from "react-redux"
// import {store} from "./Store/Store"
// import DetailClient from "./components/DetailClient"
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
// import AddClient from "./components/AddClient"
// import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
// import Register from "./components/Register"
import {store , persistor}  from './Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import SetAuthToken from "./utility/SetAuthToken"

if(localStorage.token){
  SetAuthToken(localStorage.token);

}

const  App = () =>  {
  return (
    
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout/>
      </PersistGate>
    </Provider>
  );
}

export default App;


// <Router>
// <Switch>
//     <div className="App" style = {{backgroundColor:"#0E1122", height:"100vh", color:"white", font:"bold"}}>
//       <Route exact path = "/" component = {Layout}/>
//       <Route exact path = "/client/detail/:id" component = {DetailClient}/>
//       <Route exact path = "/client/add" component = {AddClient}/>
//       {/* <Route exact path = "/register" component = {Register}/> */}
//     </div>

// </Switch>
// </Router>
