import React from 'react'
import Navbar from "./Navbar"
// import Dashboard from ""
import { AiFillDashboard } from "react-icons/ai";
import Client from "./Client";
import Dashboard from "./Dashboard"

const  Layout = () => {
    return (
        <div className = "flex">
       <Dashboard/>
        <div className = " w-full">
        <Navbar/>
        <Client/>
        </div>
        </div>
    )
}

export default Layout
