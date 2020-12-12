
import { deleteClient, getClients } from '../Store/Actions/Client';
import {connect} from "react-redux";
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

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
            <div>
                {clients.map((client)=>{
                    return (
                        <ul>
                            <li>{client.firstName}<BsFillTrashFill onClick = {() => this.props.onDeleteHandler(client._id)}/><Link to = {`/client/detail/${client._id}`}><GoArrowRight/></Link></li>
                        </ul>
                    )
                })}
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
