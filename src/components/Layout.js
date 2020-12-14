import React from 'react'
import Navbar from "./Navbar"
// import Dashboard from ""
import { AiFillDashboard } from "react-icons/ai";
import Client from "./Client";
import Dashboard from "./Dashboard"
import Register from './Register';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DetailClient from "./DetailClient"
import AddClient from "./AddClient"
import Login from "./Login";

const  Layout = () => {
    return (
       
        <Router>
        <Switch>
        <div className = "flex">
       <Dashboard/>
        <div className = " w-full">
            <div className="App" style = {{backgroundColor:"#0E1122", height:"100vh", color:"white", font:"bold"}}>
            <Navbar/>
              <Route exact path = "/" component ={Client}/>
              <Route exact path = "/client/detail/:id" component = {DetailClient}/>
              <Route exact path = "/client/add" component = {AddClient}/>
              <Route exact path = "/register" component = {Register}/>
              <Route exact path = "/login" component = {Login}/>
            </div>
            </div>
        </div>
        </Switch>
        </Router>
        
    )
}

export default Layout
