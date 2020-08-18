import React, { Component } from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component {
 
    clickHandler=(e)=>
    {
        this.props.Authenticated({},false);
    }

    render() {
        const navstyle={
            color: 'white'
        };

        return (
            <div>
                {
                this.props.logStatus
                ?<nav><Link to='/' ><h3 >Home</h3></Link>
                    <ul className="nav-links">
                        <Link to='/profile'style = {navstyle}><li>Profile</li> </Link>
                        <Link to='/login' onClick={this.clickHandler} style = {navstyle}><li>LogOut</li> </Link>
                    </ul>
                </nav>
                :<nav><Link to='/' ><h3>Home</h3></Link>
                    <ul className="nav-links">
                        <Link to='/login'style = {navstyle}><li>Login</li> </Link>
                        <Link to='/register' style={navstyle}><li>Register</li> </Link>
                    </ul>
                </nav>
                }
            </div>
        )
    }
}
export default Navbar