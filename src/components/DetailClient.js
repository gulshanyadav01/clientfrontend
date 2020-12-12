import React, { Component } from 'react'
import { detailClient } from '../Store/Actions/Client'

import { connect } from "react-redux"

class DetailClient extends Component {
    componentDidMount(){
        
        this.props.detailClient(this.props.match.params.id); 
    }

    render() {
        const {name,email, id } = this.props.client; 
        return (
            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{id}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        client: state.client
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        detailClient:(id) => dispatch(detailClient(id))
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (DetailClient); 