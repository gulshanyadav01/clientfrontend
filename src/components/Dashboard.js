import React from 'react'
import { AiFillDashboard } from "react-icons/ai";
import {Link} from "react-router-dom"
import {FaHome} from "react-icons/fa";
import {connect} from "react-redux";
import {logout} from "../Store/Actions/Auth";
import {FaSignOutAlt} from "react-icons/fa";
import {FaSignInAlt} from "react-icons/fa";
import {GoSignIn} from "react-icons/go"
import {FcContacts} from "react-icons/fc"
import {FcAbout} from "react-icons/fc"


const Dashboard = ({logout})  => {
    const logoutHandler = () => {
        console.log("hi i am logout ")
        logout();
    }
    return (
        
        <div className= "w-1/6 h-screen  " style = {{backgroundColor:"#131931", border:"solid linear-gradient(red, orange) 2px"}}>
          <h1 className = "font-extrabold text-center mt-3 "><span style = {{color:"#6C7BA5"}}>Client</span> <span style = {{color:"#15A9F8"}} >Panel</span> </h1>
          <p className = "font-medium" style = {{color:"#6F7EAC"}}>All main activity related to user is here</p>
          <div className = "mt-6">
          <nav className = "flex flex-col" style = {{color:"#566A9C"}}>
              <Link to = "/" className = " hover:bg-black px-2 py-4" ><AiFillDashboard className = "inline mr-1" style = {{color:"#146FD6"}}/><span>Dashboard</span></Link>
              <Link to = "/" className = " hover:bg-black px-2 py-4"><FaHome className = "inline mr-1  " style = {{color:"#146FD6"}}/>Home</Link>
              <Link to = "/" className = " hover:bg-black px-2 py-4"><FcAbout className = "inline mr-1" style = {{color:"#146FD6"}}/>About</Link>
              <Link to = "/" className = " hover:bg-black px-2 py-4"><FcContacts className = "inline mr-1" style = {{color:"#146FD6"}} />Contact</Link>
              <Link to  = "/register" className = " hover:bg-black px-2 py-4"><GoSignIn className = "inline mr-1" style = {{color:"#146FD6"}} />Register</Link>
              <Link to ="!#" className = " hover:bg-black px-2 py-4"><button onClick = {logoutHandler} ><FaSignOutAlt className = "inline mr-1" style = {{color:"#146FD6"}}/>Logout</button></Link>
              <Link to = "/login" className = " hover:bg-black px-2 py-4"><FaSignInAlt className = "inline mr-1" style = {{color:"#146FD6"}} />Login</Link>
          </nav>
          </div>
        </div>
        
    
    )
}

export default connect(null, {logout})(Dashboard);
