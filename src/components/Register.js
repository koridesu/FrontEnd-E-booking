import React, { Component } from 'react'
import axios from 'axios';

 class Register extends Component {
    state={
        name:"",
        mail:"",
        pword:"",
        pword_conf:""
    }
 
    submitHandler=(e)=>{
        e.preventDefault();
        if(this.state.pword === this.state.pword_conf )
        {  const registerData = {
            client_name: this.state.name,
            mail:this.state.mail,
            password:this.state.pword
        }
            axios.post(`http://localhost:8081/register`,registerData
            ).then(res =>{
                this.props.history.push('/');
                console.log(res.config.data);
            })
        }
    }

    changeHandler=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })

    }
 
    render() {
        return (
        <div type="backg2">
            <div type="box" className="col-md-8 mb-4">   
                <form >
                <div className="form-group" style={{marginTop:"20px"}}>
                        <label style={{color:"grey"}} htmlFor="name">Enter your name: </label>
                        <input type="text" className="form-control"  value={this.name} onChange={this.changeHandler} name="name" ></input>
                    </div>
                    <div className="form-group">
                        <label style={{color:"grey"}} htmlFor="name">Enter your mail: </label>
                        <input type="text" name="mail" id="id"  onChange={this.changeHandler} className="form-control" placeholder="example@example.com" >
                        </input>
                    </div>
                    <div className="input-group-prepend"  >
                        <span className="input-group-text" id="basic-addon1" style={{width:"250px"}}  >Enter your password:</span>
                        <input type="password" className="form-control" value={this.pword} onChange={this.changeHandler} name="pword" ></input>
                    </div>
                    <div className="input-group-prepend" style={{marginTop:"20px"}}>
                        <span className="input-group-text" id="basic-addon1" style={{width:"250px"}} >Confirm password:</span>
                        <input type="password" className="form-control"  value={this.pword} onChange={this.changeHandler} name="pword_conf" ></input>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block" style={{marginTop:"20px"}} onClick={this.submitHandler}>Add User</button> 
                </form>
            </div>
        </div>
        )
    }
}
export default Register;