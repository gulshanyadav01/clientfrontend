
import { deleteClient, getClients } from '../Store/Actions/Client';
import {connect} from "react-redux";
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go";
import {userProfile} from "../Store/Actions/Auth";

import {BiMessageSquareAdd} from "react-icons/bi"
import { FaTshirt } from 'react-icons/fa';



class Client extends Component {
    componentDidMount(){
        if(this.props.token){
            this.props.getClients();
            this.props.userProfile();
        }
        
        // console.log(this.props.clients)
        // console.log(this.props.token);
        // console.log(this.props.error)
        // console.log(this.props.user);
        
    }
    onDeleteHandler = (id) => {
        this.props.deleteClient(id);
        // console.log(id) 
        this.props.history.push("/");
    }
    render() {
        const {clients} = this.props
        let data = <h1>please login</h1>
        if(this.props.token){
            data = (
                <div className = "flex" >
                <div style = {{backgroundColor:"#0E1122"}} className = "mt-6 ml-4 h-30">
            <table>
            <tr>
                <th className = " text-left rounded px-6 py-2 text-blue-300" style = {{backgroundColor:"#1F263C", color:"#14A6F3" , border:"solid #131931 3px "}}>Name</th>
                <th className = " text-left rounded px-6 py-2 text-blue-300" style = {{backgroundColor:"#1F263C", color:"#14A6F3" , border:"solid #131931 3px "}}>Email</th>
                <th className = " text-left rounded px-6 py-2 text-blue-300" style = {{backgroundColor:"#1F263C", color:"#14A6F3" , border:"solid #131931 3px "}}>Phone</th>
                <th className = "  text-left rounded px-6 py-2 text-blue-300" style = {{backgroundColor:"#1F263C", color:"#14A6F3" , border:"solid #131931 3px "}}>Balance</th>
            </tr>
                {  clients.map(client =>{
                    return(
                       <>
                       <tr  key = {client._id}>
                           <td className = " font-bold rounded px-6 py-2" style = {{backgroundColor:"#1F263C", color:"#626E91", border:"solid #15192A 3px "}}>{client.firstName}  {client.lastName}</td>
                           <td className = " font-bold rounded px-6 py-2" style = {{backgroundColor:"#1F263C", color:"#626E91", border:"solid #15192A 3px "}}> {client.email}</td>
                           <td className = " font-bold rounded px-6 py-2" style = {{backgroundColor:"#1F263C", color:"#626E91", border:"solid #15192A 3px "}}> {client.phone}</td>
                           <td className = " font-bold rounded px-6 py-2" style = {{backgroundColor:"#1F263C", color:"#626E91", border:"solid #15192A 3px "}}> {client.balance}</td>
                           <td className = " font-bold px-10 py-2   "> <Link to = {`/client/detail/${client._id}`} className = " bg-red-100 px-2 py-1   rounded text-center hover:bg-blue-500 font-bold" style = {{backgroundImage:"radial-gradient(red, orange)", color:"white"}}  ><GoArrowRight className = "mr-2 text-blue-400 font-bold-2xl inline rounded w-4 h-4  rounded-xl " style = {{backgroundColor:"#2B5DFF"}}/>Detail</Link> </td>
 
                       </tr>
                       </>
                    )
                })}
                

            

            </table>
           


                {/* {clients.map((client)=>{
                    return (
                        <ul>
                            <li>{client.firstName}<BsFillTrashFill onClick = {() => this.props.onDeleteHandler(client._id)}/><Link to = {`/client/detail/${client._id}`}><GoArrowRight/></Link></li>
                        </ul>
                    )
                })} */}
            </div>
            <div className = "mt-6 ml-4">
              <Link to = "/client/add"><button className = "px-3 py-2 rounded" style = {{backgroundImage:"linear-gradient(red, orange)"}} ><div className = "flex text-center"><BiMessageSquareAdd className = "text-blue-600 mt-1"/>Add Client </div></button></Link>  
            </div>
                
            </div>
            )

        }
        return (
            
                <div>
                    {data}
                </div>
            
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        clients: state.client.clients,
        token: state.auth.token,
        error: state.auth.error,
        user:state.auth.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getClients:() => dispatch(getClients()),
        onDeleteHandler: (id) => dispatch(deleteClient(id)),
        userProfile:() => dispatch(userProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Client);
