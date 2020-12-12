
import { getClients } from '../Store/Actions/Client';
import {connect} from "react-redux";
import React, { Component } from 'react'

class Client extends Component {
    componentDidMount(){
        this.props.getClients();
        console.log(this.props.clients)
    }
    render() {
        const {clients} = this.props
        return (
            <div>
                {clients.map((client)=>{
                    return (
                        <ul>
                            <li>{client.name}</li>
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
        getClients:() => dispatch(getClients())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Client);
