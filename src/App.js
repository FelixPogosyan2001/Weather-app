import React, { Component } from 'react';
import './App.css';
import {Info} from './components/info'
import 'bootstrap/dist/css/bootstrap.min.css'
import Photo from './images/photoofblock.jpg'
import City from './components/city'
import Symbol from './images/symbol.PNG'
import Snow from './images/snow.jpg'
import Clouds from './images/clouds.jpg'
import Rain from './images/rain.jpg'
import Clear from './images/clear.jpg'
import Fog from './images/fog.jpg'
const API = '89cada44c692faad7f77c9d9f88c7feb'
class App extends Component {
  state={
    info:null,
    display:'none',
    header:null,
    body:[],
    error:null,
    photo:null
  }
  componentDidMount(){
    setInterval(()=>{
      if(this.state.info == '' ||this.state.info == null){
        this.setState({
          display:'none',
          error:null
        })
      }
    })
  }
  render() {
    return (
      <div className="App" style={{'position':'relative','left':'150px','width':'1000px','top':'150px'}}>
        <div className='row'>
          <div className="col-lg-3" id='block'>
            <img src={Photo} id="photo_1"/>
          </div>
          <Info/>
          <div className='col-lg-3 offset-lg-1' style={{'margin-top':'20px'}}>
            <input placeholder='Enter city' className="form-control" onChange={this.information}/>
            <center><button style={{'background':'#65D5C3','color':'white','border':'none','borderRadius':'10px','height':'30px','width':'90px'}} onClick={this.getWeather}>Get info</button></center>
          <City header={this.state.header} photo={this.state.photo} body={this.state.body} display={this.state.display}/>
          <h3 style={{'color':'white','textAlign':'center'}}>{this.state.error}</h3>
          </div>
        </div>
      </div>
    );
  }
  information=(event)=>{
    this.setState({
      info:event.target.value
    })
  }
  getWeather=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.info}&appid=${API}&units=metric`)
    .then((response)=>{
      if(response.status!==200){
        this.setState({
          error:'City not found',
          block:'none'
        })
        return Promise.reject('City not found')
      }
      return response.json()
    })
    .then((data)=>{
      var date = new Date();
      date.setTime(-data.sys.sunset)
      var time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this.setState({
        display:'block',
        error:null,
        header:data.name,
        photo:Fog,
        body:[Math.round((data.main.temp)),data.main.pressure,time,data.sys.country,data.weather[0].main,data.wind.speed,Snow,Clouds,Rain,Clear,Symbol]
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
}


export default App;
