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
        <div>
            <form onSubmit = {onSubmit}>
            <div>
                <label htmlFor = "firstName">firstName:</label>
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "firstName"
                    placeholder = "enter first name"
                    value = {firstName}
                    onChange = {onChangeHandler}
                    />

                </div>
                <div>
                <label htmlFor = "lastName">lastName:</label>
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "lastName"
                    placeholder = "enter last name"
                    value = {lastName}
                    onChange = {onChangeHandler}
                    />

                </div>
                <div>
                <label htmlFor = "email">email:</label>
            </div>
                <div>
                    <input 
                    type = "email"
                    name = "email"
                    placeholder = "enter email "
                    value = {email}
                    onChange = {onChangeHandler}
                    />

                </div>
                <div>
                <label htmlFor = "phone">phone:</label>
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "phone"
                    placeholder = "enter phone "
                    value = {phone}
                    onChange = {onChangeHandler}
                    />

                </div>
                <div>
                <label htmlFor = "balance">balance:</label>
            </div>
                <div>
                    <input 
                    type = "text"
                    name = "balance"
                    placeholder = "enter balance"
                    value = {balance}
                    onChange = {onChangeHandler}
                    />

                </div>
                <div>
                    <input type = "submit" value = "submit"/>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {addClient})(AddClient);
