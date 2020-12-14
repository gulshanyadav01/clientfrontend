import React,{useState} from 'react'
import {connect } from "react-redux"
import {addClient} from "../Store/Actions/Client"
import {useHistory} from "react-router-dom"



const  AddClient = ({addClient}) =>  {
    const history = useHistory();
    const [formInput , setFormInput] = useState({
        firstName:"",
        lastName:"",
        email:"",
        balance:"",
        phone:""
    })

    const onChangeHandler = (e) => {
        
        setFormInput({...formInput,[e.target.name]: e.target.value });
        // console.log(formInput)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);

        addClient(formInput);
        history.push("/");
        

    }
    const {firstName, lastName, email, balance, phone} = formInput; 
    return (
        
            <div className= "ml-80 mt-3 w-72 h-96 rounded " style = {{backgroundColor:"#1F263C", border:"solid linear-gradient(red, orange) 1px"}}>
            <form onSubmit = {onSubmit} className = "w-48 ml-4" style = {{backgroundColor:"#1F263C"}} >
                <div className = "text-center ml-4">
                    <h1>Enter The New Client </h1>
                </div>
                <div >
                    <input 
                    type = "text"
                    name = "firstName"
                    placeholder = "enter first name"
                    value = {firstName}
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
                    name = "lastName"
                    placeholder = "enter last name"
                    value = {lastName}
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
                    name = "phone"
                    placeholder = "enter phone "
                    value = {phone}
                    onChange = {onChangeHandler}
                    style = {{backgroundColor:"#1F263C"}}
                    className = "border-b  h-14" 

                    />

                </div>
                <div>
                
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "balance"
                    placeholder = "enter balance"
                    value = {balance}
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

export default connect(null, {addClient})(AddClient);
