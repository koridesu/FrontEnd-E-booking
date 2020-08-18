import React, { Component } from 'react'

import '../styles/Bus.css'
import Seat from "./Seat.js"
import uniqid from 'uniqid'

 class Bus extends Component {

    render() 
    {
        var pos=0;
        var seat_num=0;
        return (
            <div >

                <div className="line">
                <div >
                    <h1 style={{fontSize:15,color: "#B08CB8"}}> {this.props.g.bus.company_name}</h1> 
                </div>
                <div class="row">
                    <div class="col-md-2 vr">
                        <p>Nereden: {this.props.g.bus.departure} </p>
                    </div>

                    <div class="col-md-2 vr">
                        <p>Nereye: {this.props.g.bus.arrival}</p>
                    </div>

                    <div class="col-md-2 vr">
                        <p> Tarih: {this.props.g.bus.date} </p>
                    </div>

                    <div class="col-md-2 vr">
                        <p> Saat: {this.props.g.bus.time}</p>
                    </div>

                    <div class="col-md-2 vr">
                        <p> Fiyat: {this.props.g.bus.price}TL</p>
                    </div>

               </div> 
            </div> 
                <div className="bus">
                    {
                        this.props.g.seats.map(seat=>{
                            pos=pos+1;
                            seat_num +=1;

                            return(
                                <Seat key={uniqid.time()} s={seat} index={seat_num} position={pos} f={this.props.f} bus_info={this.props.g.bus}></Seat>

                            )
                        })
                    }
                </div>
            </div> 

        )
    }
}
export default Bus;