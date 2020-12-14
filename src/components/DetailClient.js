import React, { Component } from 'react'
import { detailClient } from '../Store/Actions/Client'

import { connect } from "react-redux"

class DetailClient extends Component {
    componentDidMount(){
        
        this.props.detailClient(this.props.match.params.id);
        console.log(this.props.match.params.id); 
        // console.log(this.props)
    
    }

    render() {
        const {firstName, lastName, phone , balance ,email } = this.props.user; 
        return (
            <div>
                <h1>{balance}</h1>
                <h1>{email}</h1>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{phone}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.client.client.client
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        detailClient:(id) => dispatch(detailClient(id))
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (DetailClient); 