import React, { Component } from 'react'
import ".././styles/Login.css"
import axios from 'axios'
import {Link} from 'react-router-dom';

class Login extends Component {
    state={
       
        mail:"",
        password:"",
        user:{}
    }
    changeHandler=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value,
            [e.target.name]:e.target.value
        })

    }
    submitHandler=(e)=>{
        e.preventDefault();
        const logindata={
            mail:this.state.mail,
            password:this.state.password
        }

        axios.post(`http://localhost:8081/login`,logindata)
        .then(res => {
        if(res.data.log){ 
            this.setState({
            user:res.data.client
            })
        console.log("dogru girdiniz");
        this.props.Authenticated(this.state.user,true);
        this.props.history.push('/');
        }
        else console.log("yanlıs girdiz" );

       })
        .catch(err => {
            console.error(err); 
        })
    }

    render() {
        return (
            <div type="backg"  >
               
<form className="holder">
<h1>LOGIN TO THE SYSTEM</h1>
<div type="group">
    <div className="form-group">
        <label style={{color : "grey"}} htmlFor="exampleInputEmail1">Email address:</label>
        <input type="email" className="form-control" id="exampleInputEmail1" name="mail" onChange={this.changeHandler} value={this.state.mail} aria-describedby="emailHelp" style={{width:"100%",margin:"0 auto"}}placeholder="Enter email"></input>
      
    </div>
        <div className="form-group">
        <label style={{color : "grey"}} htmlFor="exampleInputPassword1">Password:</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={this.changeHandler} value={this.state.password} placeholder="Password" style={{width:"100%",margin:"0 auto"}}></input>
    </div>
  <button type="submit" className="btn btn-secondary" onClick={this.submitHandler}>Login</button>
  <div className="signup">Don't have an account? 
  <Link to="/Register"> Sign Up</Link></div>
  
</div>
</form>
            </div>
        )
    }
}
export default Login;