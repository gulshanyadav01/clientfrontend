
import { deleteClient, getClients } from '../Store/Actions/Client';
import {connect} from "react-redux";
import React, { Component } from 'react'

class Client extends Component {
    componentDidMount(){
        this.props.getClients();
        console.log(this.props.clients)
    }
    onDeleteHandler = (id) => {
        this.props.deleteClient(id); 
    }
    render() {
        const {clients} = this.props
        return (
            <div>
                {clients.map((client)=>{
                    return (
                        <ul>
                            <li  onClick = {() => this.props.onDeleteHandler(client.id)}>{client.firstName}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        clients: state.clients
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getClients:() => dispatch(getClients()),
        onDeleteHandler: (id) => dispatch(deleteClient(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Client);
