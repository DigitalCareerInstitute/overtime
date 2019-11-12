import React, { Component } from 'react';
import '../App.css'
import { number } from 'prop-types';
import {Alert} from 'react-bootstrap'

class Login extends Component {
    constructor(props){
        super(props);
       this.state={userName: '', userPass:'', error:false}

    }
    submit = (e)=> {
        let RegExpression = /^[a-zA-Z]*$/;  
       
        e.preventDefault()
        if (RegExpression.test(this.state.userName)) {
            console.log('this is true !!')  
            this.setState({error:false})    
            
        } 

        else { 
        
        this.setState({error:'haha error'})
        } 
}
    change = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        
        })
    }
    render() {
        return (
            <form onSubmit={this.submit}>
            <div>{
                <div id="login" className=" text-light text-center ">
                    <div id="info" className="container w-25">
                        <h1 className="mb-5">Login</h1>
                        <input onChange={this.change} name='userName' id="log-input" className="form-control mb-2" type="text" placeholder="Name" />
                        <input onChange={this.change} name='userPass' id="log-password"  className="form-control mb-4" type="password" placeholder="Password" />
                        { this.state.error ?
                        <Alert key='jhg' variant='danger'>
                            {this.state.error}
                        </Alert> :null}
                        <button type="submit" className=" mb-5 btn btn-primary btn-block">Submit</button>

                        You Are new ? <a href="#" onClick={this.props.showSignup} className="mb-3">Start Register Yourself</a>

                    </div>

                </div>}

            </div>

            </form>
        );
    }
}

export default Login;
