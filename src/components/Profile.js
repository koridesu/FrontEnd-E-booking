import React, { Component } from 'react'
import Tilt from './Tilt'
import Info from './Info'

import '../styles/Profile.css'
import axios from "axios"
import uniqid from "uniqid"

class Profile extends Component {
   state={
        tickets:[],
        ticked_id:"",
        bus_info:[],
    }

    componentDidMount()
    {
        axios.post(`http://localhost:8081/mytickets`,this.props.user).then(res=>{
        this.setState({
            tickets:res.data
           })
        })
    }
    
    onClickHandler=(e)=>{
        e.preventDefault();
        for(var i = 0;i<this.state.tickets.length;i++)
        if(this.state.tickets[i].book_code == this.state.ticked_id)
{
        axios.post(`http://localhost:8081/getBusInfo`,this.state.ticked_id).then(res=>{
            console.log(res.data)
            this.setState({
                bus_info:res.data
            })
        })
 }
    }
    onChangeHandler=(e)=>{
        e.preventDefault();
        this.setState({
            ticked_id:e.target.value
        })
    }


    render() {
        var sayac=0;
        
        return (
            <div className="fullscreen">
            <div className="s-box" data-tilt data-tilt-speed="300" data-tilt-perspective="300">
                
                <Tilt className="Tilt" options={{
                    reverse:false,  
	                max:            5,    
                    perspective:    6000,  
                    scale:          1.0,      
                    speed:          1500,   
                    transition:     true,   
                    axis:           null,   
                    reset:          true     }} >
                   
                   <div className="Tilt-inner">  
                    <p> İsim: {this.props.user.client_name} </p> <p style={{display:"inline"}}>Mail: {this.props.user.mail}</p>
                   </div>   
                </Tilt>
            </div>

            <ul class="list-group">
            {
                       this.state.tickets.map(ticket=>{
                        sayac++;
                        return(
                            <div>
                           <li className="list-group-item disabled" >{sayac}Bilet: <Info key={uniqid.time()} ticket={ticket} ></Info></li>
                            </div>
                            )
                        })  
            }
 
                      </ul>

             
            </div>
        )
    }

}
export default Profile


/*
 <div className="Tilt-inner">  
                  
                    
                   
                    <form>
                  
                       <label>Otobüs numaranız ile otobüs bilgilerinizi kontrol edebilirsiniz:</label>
                       <input onChange={this.onChangeHandler} value={this.state.ticked_id}></input>
                       <button onClick={this.onClickHandler}>Search</button>
                   </form>


  {this.state.bus_info.map(bus=>{
                            return(
                                <div key ={uniqid.time()}>
                                <p style={{fontSize:"20px",float:"left"}}>Otobüs numarası: {bus.bus_id} - Firma: {bus.company_name}// </p>
                                <p style={{fontSize:"20px",float:"left"}}> Kalkış: {bus.departure} - Varış: {bus.arrival}// </p>
                                <p style={{fontSize:"20px",float:"left"}}> Tarih: {bus.date} - Saat: {bus.time}</p>
                               

                            </div>
                            )
                        })} 


 <t  style={{float:"left"}} >{sayac}Bilet:</t>



*/