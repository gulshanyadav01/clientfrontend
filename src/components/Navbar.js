import React from 'react'
import Logo from "../Asset/Images/gulshan.jpg"

const  Navbar = () => {
    return (
        <div style = {{backgroundColor:"#182037"}} className = " h-12">
        <div className = "flex justify-around">
        <h1>hello</h1>
            <div className  = "w-20 h-8 bg-blue-400 rounded" style = {{backgroundColor:"#182037"}}>
                <img src = {Logo} alt = "gulshan" style = {{width:"50%", height:"100%"}} className = "rounded-2xl" />
                
            </div>
        </div>
        </div>
    )
}

export default Navbar
