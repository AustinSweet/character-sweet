import React, { Component } from 'react';
import DiceContainer from './DiceContainer';
import "./Shell.css";

class Shell extends Component {

    addToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    render(){
        return(
            <div>
                <div className="background">
                    <DiceContainer></DiceContainer>
                </div>
            </div>
        );
    }
}

export default Shell;