import React, { Component } from 'react';
import '../App.css'

class Login extends Component {
    render() {
        return (
            <div>{this.props.loginData ?
                <div id="login" className="bg-dark text-light text-center ">
                    <div id="info" className="container w-25 bg-dark">
                        <h1 className="mb-5">Login</h1>
                        <input id="log-input" className="form-control mb-2" type="text" placeholder="Name" />
                        <input id="log-password" className="form-control mb-4" type="password" placeholder="Password" />

                        <button type="submit" className=" mb-5 btn btn-primary btn-block">Submit</button>

                        You Are new ? <a href="#" onClick={this.props.showSignup} className="mb-3">Start Register Yourself</a>

                    </div>

                </div> : null}

            </div>
        );
    }
}

export default Login;