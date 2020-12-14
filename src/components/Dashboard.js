import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import {Link} from "react-router-dom"
import {FaHome} from "react-icons/fa";


const Dashboard = ()  => {
    return (
        
        <div className= "w-1/6 h-screen rounded " style = {{backgroundColor:"#131931", border:"solid linear-gradient(red, orange) 2px"}}>
          <h1 className = "font-extrabold text-center mt-3 "><span style = {{color:"#6C7BA5"}}>Client</span> <span style = {{color:"#15A9F8"}} >Panel</span> </h1>
          <p className = "font-medium" style = {{color:"#6F7EAC"}}>All main activity related to user is here</p>
          <div className = "mt-6">
          <nav className = "flex flex-col" style = {{color:"#566A9C"}}>
              <Link to = "/" className = " hover:bg-blue-200"><AiFillDashboard className = "inline mr-1" style = {{color:"#146FD6"}}/><span>Dashboard</span></Link>
              <Link to = "/"><FaHome className = "inline mr-1" style = {{color:"#146FD6"}}/>Home</Link>
              <Link to = "/">About</Link>
              <Link to = "/">Contact</Link>
          </nav>
          </div>
        </div>
        
    
    )
}

export default Dashboard;
