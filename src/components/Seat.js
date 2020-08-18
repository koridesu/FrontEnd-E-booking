import React, { Component } from 'react'
import "../styles/Seat.css"

 class Seat extends Component {

  onClickHandler(){
    if(this.props.s == 0)
    this.props.f(this.props.index,this.props.bus_info);
    else alert("This seat has already taken!")
  }


  render() {
    this.state={
      color:"white"
    }
        return (
          this.props.position%3===0?
          <div className="topSeat">
             { this.props.s === 1? 
              <div className="seat">
              <i className="fas fa-user" onClick={this.onClickHandler.bind(this)}></i>
             
              </div>
              :
              <div className="seat">
              <i className="far fa-user" onClick={this.onClickHandler.bind(this)}></i>
              
              </div>
              }
          </div>
          
          :this.props.position%3==1?
              <div className="bottomSeat2">
                {  this.props.s == 1? 
                  <div className="seat">
                  <i className="fas fa-user"  onClick={this.onClickHandler.bind(this)}></i>
                  
                  </div>
                  :
                  <div className="seat">
                  <i className="far fa-user"  onClick={this.onClickHandler.bind(this)}></i>
                  
                  </div>
                }
          </div>:
          <div className="bottomSeat">
                {  this.props.s === 1? 
                  <div className="seat">
                  <i className="fas fa-user"  onClick={this.onClickHandler.bind(this)}></i>
                 
                  </div>
                  :
                  <div className="seat">
                  <i className="far fa-user"  onClick={this.onClickHandler.bind(this)}></i>
                 
                  </div>
                  }
          </div>
          
        )
    }
}
export default Seat

/*
      var divider;
      
      if(this.props.position%3===0){
        divider = <div className="topSeat">
        { this.props.s === 1? 
         <div className="seat">
         <i className="fas fa-user"></i>
         <label>{this.props.index}</label>
         </div>
         :
         <div className="seat">
         <i class="far fa-user"></i>
         <label>{this.props.index}</label>
         </div>
         }
     </div>}
     else if(this.props.position%3===1){
       console.log(this.props.position)
       divider = <div className="thirdSeat">
       {  this.props.s === 1? 
         <div className="seat">
         <i className="fas fa-user"></i>
         <label>{this.props.index}</label>
         </div>
         :
         <div className="seat">
         <i class="far fa-user"></i>
         <label>{this.props.index}</label>
         </div>
       }
    </div>
     }
     else {
       divider = 
       <div className="bottomSeat">
       {  this.props.s === 1? 
         <div className="seat">
         <i className="fas fa-user"></i>
         <label>{this.props.index}</label>
         </div>
         :
         <div className="seat">
         <i class="far fa-user"></i>
         <label>{this.props.index}</label>
         </div>
       }
    </div>
*/