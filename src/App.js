import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import DiceContainer from './Components/DiceContainer';

class App extends Component{
  
  render() {
    return (
     <div>
       <DiceContainer></DiceContainer>
     </div>
  );
  }
}

export default App;
