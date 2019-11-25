import React, { Component } from 'react'

 class Error extends Component {
    render() {
        return (
            <span className="badge badge-danger">
            {this.props.nameError}
            </span>
        )
    }
}
export default Error;