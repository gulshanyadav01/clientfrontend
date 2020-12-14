import React,{useState} from 'react'
import {connect } from "react-redux"
import {useHistory} from "react-router-dom"

import { registerUser } from '../Store/Actions/Auth';


const  Register = ({registerUser}) =>  {
    const history = useHistory();
    const [formInput , setFormInput] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (e) => {
        
        setFormInput({...formInput,[e.target.name]: e.target.value });
        // console.log(formInput)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);

        registerUser(formInput);
        history.push("/");
        

    }
    const {name, email, password} = formInput; 
    return (
        // <div className = "flex text-blue-300">
               
            <div className= "ml-80 mt-3 w-72 h-64  rounded " style = {{backgroundColor:"#1F263C", border:"solid linear-gradient(red, orange) 1px"}}>
            <form onSubmit = {onSubmit} className = "w-48 ml-4" style = {{backgroundColor:"#1F263C"}} >
                <div className = "text-center ml-4">
                    <h1> Register Yourself </h1>
                </div>
                <div >
                    <input 
                    type = "text"
                    name = "name"
                    placeholder = "enter  name"
                    value = {name}
                    onChange = {onChangeHandler}
                    style = {{backgroundColor:"#1F263C"}} 
                    className = "border-b h-14"
                    />

                </div>
                <div>
                
            </div>
                <div>
                    <input 
                    type = "email"
                    name = "email"
                    placeholder = "enter email "
                    value = {email}
                    onChange = {onChangeHandler}
                    style = {{backgroundColor:"#1F263C"}} 
                    className = "border-b h-14"

                    />

                </div>
                <div>
                
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "password"
                    placeholder = "enter password "
                    value = {password}
                    onChange = {onChangeHandler}
                    style = {{backgroundColor:"#1F263C"}} 
                    className = "border-b h-14"
                    />

                </div>
              
                <div className  ="text-center mt-4  font-bold ">
                    <input className = "px-24 py-2 rounded cursor-pointer font-bold-2xl bg-blue-500" type = "submit" value = "Submit" style = {{backgroundImage:"linear-gradient(red, orange)"}} />
                </div>
            </form>
        </div>
        
       
    )
}

export default connect(null, {registerUser})(Register)
