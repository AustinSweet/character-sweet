import React, { Component } from 'react';
import AbilityScoreContainer from './AbilityScoreContainer';
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
                    <div className="stats">
                        <AbilityScoreContainer></AbilityScoreContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shell;