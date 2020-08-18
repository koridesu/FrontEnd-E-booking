import React, { Component } from 'react'
import "../styles/Home.css"
import axios from 'axios'
import uniqid from 'uniqid'
import Bus from './Bus'
 class Home extends Component {
    
    state={
        sehirler : ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik","Bingöl","Bitlis", "Bolu", "Burdur", "Bursa","Çanakkale","Çankırı"
        , "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep","Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli",
         "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "K.maraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon","Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye","Düzce"],
        departure:"Adana",
        arrival:"Adana",
        date:"",
        busses:[],
        index:null,
        taken_seat:null,
        yollanacak:""
        }

    onClickHandler = (e) =>{
       
        let expedition_info = [this.state.departure,this.state.arrival,this.state.date]
        axios.post(`http://localhost:8081/expeditions`,expedition_info).then(res=>{
            console.log(res.data)
            this.setState({
                busses:res.data
            })
        })
    }   

    deperturePick = (e) => {
        e.preventDefault()
        this.setState({
          departure:e.target.value  
        })
    }

    arrivalPick = (e) =>{
        e.preventDefault()
        this.setState({
          arrival:e.target.value  
        })
    }
    datePick = (e) =>{
        e.preventDefault()
        this.setState({
            date:e.target.value
        })
       
    }
   f=(index,bus_info)=>{
    this.setState({
        index:index,
        taken_seat:[bus_info.bus_id,index,this.props.logStatus.user.client_id,bus_info.price]
    })



   }
   
   onSend=(e)=>{
        e.preventDefault()
        if(this.props.logStatus.isLogged) 
        axios.post(`http://localhost:8081/confirm_ticket`,this.state.taken_seat).then(res=>{
            this.onClickHandler()
        })
        
        else
        alert("Please Log in your account")


   }

    render() {
        var anahtar = 1;
        var anahtar2=5000;
        var anahtar3 = 10000;
        var anahtar4=15000;
        return (
            <div>
            {  
          
            <div className="fullscreen">
                <h1 style={{width:"900px", marginLeft: "50%",  transform:"translate(-50%)", textAlign:"center",marginBottom:"50px"}}>Home Page</h1>  
               
                <div className="busses">
                {
                    this.state.busses.map(bus=>{
                      
                     return(
                       
                       <Bus key={uniqid.time()} g={bus} f={this.f}/>
                    ) 
                    })
                }
                </div>
                <div className ="card">
               <div className="list">
               <select onChange={this.deperturePick}>
                   {this.state.sehirler.map(sehir=>{
                           anahtar3+=1
                       return(                          
                           <option key={anahtar3}>{sehir}</option>       
                       )
                   })
                   }
                    </select> 
                    <label>Kalkış</label> 
               </div>

               <div className="list" style={{display:"inline"}}>
               <select onChange={this.arrivalPick}>
                   {this.state.sehirler.map(sehir=>{
                           anahtar4+=1
                       return(                          
                           <option key={anahtar4} >{sehir}</option>       
                       )
                   })
                   }
                    </select> 
                    <label>Varış</label> 
               </div>
               
               <div className="datepicker">
                   <input onChange={this.datePick} type="date"/>
                    <label>Tarih seçiniz</label>
                </div>
             <button className="confirm" onClick={this.onClickHandler} >Sefer Ara</button>
                    </div>

                    <div className="result-label"> Seçilen Koltuk Numarası: {this.state.index}
                    <form onClick ={this.onSend.bind(this)}> 
                   <button className="buton" >Buy</button>
                    </form>
                    </div>
               
           </div>
            }
            
            </div>
            
        )
    
    }
}


export default Home