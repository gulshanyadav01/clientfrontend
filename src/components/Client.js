
import { deleteClient, getClients } from '../Store/Actions/Client';
import {connect} from "react-redux";
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { AiFillDashboard } from "react-icons/ai";
import {BiMessageSquareAdd} from "react-icons/bi"



class Client extends Component {
    componentDidMount(){
        this.props.getClients();
        console.log(this.props.clients)
    }
    onDeleteHandler = (id) => {
        this.props.deleteClient(id);
        // console.log(id) 
        this.props.history.push("/");
    }
    render() {
        const {clients} = this.props
        return (
            <div className = "flex">
                <div className= "w-1/6 mt-3 rounded " style = {{backgroundColor:"#131931", border:"solid linear-gradient(red, orange) 2px"}}>
                    <h1 className = "font-bold mt-2 h-96 "><AiFillDashboard/>Dashboard</h1>
                </div>
                <div className = "flex">
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
                           <td className = " font-bold px-6 py-2"> <Link to = {`/client/detail/${client._id}`}><GoArrowRight className = "bg-red-600 text-blue-400 font-bold-2xl rounded w-16 h-8  " style = {{backgroundColor:"#2B5DFF"}}/></Link> </td>
 
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
                
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        clients: state.client.clients
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getClients:() => dispatch(getClients()),
        onDeleteHandler: (id) => dispatch(deleteClient(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Client);
