import React, { Component } from 'react'
import "../App.css"
import { Form } from 'react-bootstrap'
import Error from "./Error"


class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            db:"",
            userNameError:false,
            psw2Error:false,
            firstNameError: false,
            secondNameError:false,
            dateError: false
        }
        this.tempData = {
            db:{firstName:"", secondName:"", birthDate:"", userName:"", psw1:"", psw2:"",errorStatus:false}, 
            errors:{
                userNameError:"User Name must atleast of 5 alphanumberic characters",
                psw2Error: "Both Password must be same and atleast contain 6 characters", 
                nameError: "Name must contain only alphabets",
                dateError: "Data of birth must be correct"}
        
        }
        
    
    }
    
    inputHandler=async(e)=>{

            let targetName= e.target.name;
            let targetValue= e.target.value;
        
        switch (targetName){

            

            case "firstName":
                this.tempData.db[targetName]=targetValue;
                console.log(this.tempData.db[targetName])
                if((this.tempData.db[targetName].length<5) ||  ((this.tempData.db[targetName]).match(/[^A-Za-z*]/)))
                {
                    this.tempData.db.errorStatus=true;
                    await this.setState({firstNameError:true})
                    
            }
                else{
                    await this.setState({firstNameError:false})
                    this.tempData.db.errorStatus=false
            }
                
                break;

            case "secondName":
                
                this.tempData.db[targetName]=targetValue;
                console.log(this.tempData.db[targetName])
                if((this.tempData.db[targetName].length<5) ||  ((this.tempData.db[targetName]).match(/[^A-Za-z*]/)))
                {
                    await this.setState({secondNameError:true})
                    this.tempData.db.errorStatus=true
            }
                else{
                    await this.setState({secondNameError:false})
                    this.tempData.db.errorStatus=false
                  }
                break;

            case "userName":

                this.tempData.db[targetName]=targetValue;  
                if((this.tempData.db[targetName].length<5) ||  ((this.tempData.db[targetName]).match(/[^A-Za-z-_*]/)))
                    {
                    e.target.style.border="3px solid red"
                    await this.setState({userNameError:true})
                    this.tempData.db.errorStatus=true
                    } 
                
                else {
                    e.target.style.border="none"
                    await this.setState({userNameError  :false})
                    this.tempData.db.errorStatus=false                 
                }
                
            break;

            case "psw1":

                this.tempData.db[targetName]=targetValue;
                if(this.tempData.db[targetName].length <= 5 )
                {
                    e.target.style.border="3px solid red"
                    await this.setState({psw2Error:true})
                    this.tempData.db.errorStatus=true
                    } 
                else {
                    e.target.style.border="none"
                    await this.setState({psw2Error:false})
                    this.tempData.db.errorStatus=false
                }
                if( this.tempData.db.psw1 !== this.tempData.db.psw2)
                { 
                    await this.setState({psw2Error:true})
                    this.tempData.db.errorStatus=true
                    }   
                else{ 
                    await this.setState({psw2Error:false})
                    this.tempData.db.errorStatus=false
                }
                
                break;

            case "psw2":
                
                this.tempData.db[targetName]=targetValue;    
                if( this.tempData.db.psw1 !== this.tempData.db[targetName])
                { 
                    e.target.style.border="3px solid red"
                    await this.setState({psw2Error:true})
                    this.tempData.db.errorStatus=true
                    }   
                else{ 
                    e.target.style.border="3px solid green"
                    await this.setState({psw2Error:false})
                    this.tempData.db.errorStatus=false
                }
                break;  

            default:
                break;
        }

        }
    
    submitHandler = async (e)=>{
        
        e.preventDefault();
        let tempDate=document.getElementById("birthDate").value;
        let year=parseInt(tempDate.slice(0,4));

       if(year>parseInt(new Date().getFullYear())) {

            await this.setState({dateError:true})
            this.tempData.db.errorStatus=true
        }
         else {
            this.tempData.db.birthDate = tempDate;
            await this.setState({dateError:false})
            this.tempData.db.errorStatus=false
        }

        if(!this.tempData.db.errorStatus) {
         let response = await (
            await fetch('/register',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(this.state)})
         ).json()
         if(response.status === "ok"){
            await fetch('/profile',{method:'GET',headers:{'content-type':'application/json'},body:JSON.stringify(this.state)})
         }
        
         await this.setState({db:[this.tempData.db]})
         console.log(this.state.db)
        
        }else{

            console.log("check errors")
        }
    }

    render() {
        return (
            <div>
            
                <div id="wd" className="bg-dark p-5">
                    <div className="container bg-dark ">
                    <Form autoComplete="none" onSubmit={this.submitHandler}>
                        <h1 className="mb-5"> Register yourself here!</h1>
                        <input className="form-control mb-2" name="firstName" type="text"  placeholder="First name" onChange={this.inputHandler} />
                        {this.state.firstNameError ? <Error nameError= {this.tempData.errors.nameError} />: null}
                        <input className="form-control mb-2" name="secondName" type="text"  placeholder="Second name" onChange={this.inputHandler} />
                        {this.state.secondNameError ? <Error nameError= {this.tempData.errors.nameError} />: null}
                        <input className="form-control mb-2" id="birthDate" type="date"/>
                        {this.state.dateError ? <Error nameError= {this.tempData.errors.dateError} />: null}
                        <input className="form-control mb-2" name="userName" type="text"    placeholder="user name"  onChange={this.inputHandler}/>
                         {this.state.userNameError ? <Error nameError= {this.tempData.errors.userNameError} />: null}
                        <input className="form-control mb-2" name="psw1"  type="password" autoComplete="none" placeholder="password"   onChange={this.inputHandler} />
                        <input className="form-control mb-4" name="psw2"  type="password" placeholder="confirm password" onChange={this.inputHandler} />
                        {this.state.psw2Error ? <Error nameError= {this.tempData.errors.psw2Error} />: null}
                        <button className="btn btn-primary btn-block">Submit</button>
                        <button className="btn btn-danger btn-block" type="reset">Reset</button>
                       
                        </Form>
                    </div>
                    
                </div> 
            </div>
        )
    }
}
export default Signup;
