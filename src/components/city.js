import React from 'react'
class City extends React.Component{
  state={
    length:null,
    st:null
  }
  componentDidMount(){
    console.log(this.state.length)
    var interval=setInterval(()=>{
      if(this.props.body[0]){
        this.setState({
          length:this.props.body[0]
        })
        console.log(this.state.length);
        if(this.state.length>9 || this.state.length<-9){
          this.setState({
            st:{'width':'30px','height':'30px','position':'absolute','zIndex':'3','left':'63px'}
          })
        }
        else{
          this.setState({
            st:{'width':'30px','height':'30px','position':'absolute','zIndex':'3','left':'29px'}
          })
        }
        clearInterval(interval);
      }
    })
  }
  render(){
    return(
      <div className="col-lg-4" style={{'display':`${this.props.display}`,'marginTop':'30px'}}>
      <img src={this.props.body[10]} id='symbol' style={this.state.st}/>
        <img src={this.props.body[4]=='Snow' ? this.props.body[6] : this.props.body[4]=='Clouds' ?  this.props.body[7] : this.props.body[4]=="Rain" ? this.props.body[8] : this.props.body[4]=='Fog' ? this.props.photo: ''} style={{'width':'230px','position':'relative','right':'21px','bottom':'5px'}}/>
            <h1 style={{'bottom':'110px','right':'15px','position':'relative','color':'white'}}>{this.props.body[0]}</h1>
            <div style={{'background':'white','width':'230px','bottom':'61.5px','position':'relative','right':'21px','height':'170px'}}>
            <h3 id='city'>{this.props.header},{this.props.body[3]}</h3>
              <ol type='none' id='lists'>
                <li id='one'>Pressure: {this.props.body[1]}</li>
                <li id='two'>Sunset: {this.props.body[2]}</li>
                <li id='three'>Speed of wind: {this.props.body[5]}</li>
                <li id='four'> {this.props.body[4]}</li>
              </ol>
            </div>
      </div>
    )
  }
}
export default City
