import React, { Component } from 'react'
import "../App.css"

class Signup extends Component {
    render() {
        return (
            <div>{
                <div id="wd" className="bg-dark p-5">
                    <div className="container bg-dark ">
                        <h1 className="mb-5"> Register yourself here!</h1>
                        <input className="form-control mb-2" id="fname" type="text" placeholder="First name" />
                        <input className="form-control mb-2" id="lname" type="text" placeholder="Second name" />
                        <input className="form-control mb-2" id="bdate" type="date" />
                        <input className="form-control mb-2" id="uname" type="text" placeholder="user name" />
                        <input className="form-control mb-2" id="psw1" type="password" placeholder="password" />
                        <input className="form-control mb-4" id="psw2" type="password" placeholder="confirm password" />
                        <button className="btn btn-primary btn-block">Submit</button>
                        <button className="btn btn-danger btn-block">Reset</button>
                        {console.log(this.props.sigupData)}
                    </div>
                </div> }
            </div>
        )
    }
}
export default Signup;
