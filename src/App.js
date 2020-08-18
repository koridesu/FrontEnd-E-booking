import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'

class App extends Component {
  
  state={
    isLogged:false,
    user:{}
  }
  
  Authenticated=(user,logStatus)=>{
    this.setState({
      user:user,
      isLogged:logStatus
    })
  }
 

  render(){
  return (
    <Router>
    <div className="App">
       <Navbar logStatus={this.state.isLogged} Authenticated={this.Authenticated}  ></Navbar>
      <Switch>     
        <Route path="/" exact render={(props) => <Home {...props} logStatus={this.state} />}  />
        <Route path='/login'render={(props) => <Login {...props} Authenticated={this.Authenticated} />}   />
        <Route path="/register" exact component = {Register}/>
        <Route path="/profile" exact render={(props)=> <Profile {...props} user= {this.state.user}/>}   />
     </Switch>
  
    </div>
    </Router>
  );
}
}
export default App;
//<Route path="/login" exact render={props => (<Login {...props}/>)}/>