import React from 'react'
import Logo from "../Asset/Images/gulshan.jpg"
import {connect} from "react-redux"; 

const  Navbar = (props) => {
    return (
        <div style = {{backgroundColor:"#182037"}} className = " h-12">
        <div className = "flex justify-around">
        <div>
            {/* {props.token ? (<div>{props.user.email}</div>) : null} */}
        </div>
        
            <div className  = "w-20 h-8 bg-blue-400 mt-2 rounded" style = {{backgroundImage:"linear-gradient(red,orange)"}}>
                <img src = {Logo} alt = "gulshan" style = {{width:"50%", height:"100%"}} className = "rounded-l" />
                
            </div>
           
        </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        user: state.auth.user,
        // token: state.auth.token
    }
}
export default connect(mapStateToProps) (Navbar);
