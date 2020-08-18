import React, { Component } from 'react'
import axios from 'axios'

class Info extends Component {
    state={
        isVisible:false,
        bus_info:[]
    }
 
    onClickHandler=(e)=>{  
        this.setState({
            isVisible: !this.state.isVisible
            
        })

        axios.post(`http://localhost:8081/getbus`,this.props.ticket.book_code).then(res=>{
            console.log(res.data);
            this.setState({
                bus_info:res.data
            })
        })
    }



    render() {
        return (
            <div>
                <div style={{height:"15px",width:"1900px", cursor:"pointer"}}  onClick={this.onClickHandler}>
        {this.state.isVisible? <p> Firma:{this.state.bus_info.company_name} / Nereden: {this.state.bus_info.arrival} / Nereye: {this.state.bus_info.arrival} / Fiyat: {this.props.ticket.price} /  Seçtiğiniz Koltuk:{this.props.ticket.seat}
                   / Tarih: {this.state.bus_info.date} / Saat: {this.state.bus_info.time} 
                   </p>:null} 
                  
            </div>
            </div>
        )
    }
}

export default Info