import React, { Component } from 'react';
import './App.css';
import BoxComponent from './boxComponent';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "red",
      onClickMsg:""
    }
  }

  handleClick = (e) => {
    this.setState({bgColor:'green', onClickMsg:"Button Clicked !"})
  }
handleResetClick =(e) => {
  this.setState({bgColor:'red' ,onClickMsg: ""})
}

render(){
  return (
   
    <div className="app">
      <BoxComponent bgColor={this.state.bgColor}/>
      <div className="button-container">
<button className="click-button" onClick={this.handleClick}> 
PRESS
</button>
<button className="click-button" onClick={this.handleResetClick}> 
RESET
</button>
</div>
  <h5>{this.state.onClickMsg}</h5>
      
    </div>
  
  );
}
}

export default App;
