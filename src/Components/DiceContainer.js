import React, { Component } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import seedrandom from 'seedrandom';
import "./DiceContainer.css";

class DiceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { lastResult: 0,
                        customInput: 0,
                        history: [] };
        this.rollDice = this.rollDice.bind(this);
        this.rollD20 = this.rollD20.bind(this);
        this.rollD12 = this.rollD12.bind(this);
        this.rollD10 = this.rollD10.bind(this);
        this.rollD8 = this.rollD8.bind(this);
        this.rollD6 = this.rollD6.bind(this);
        this.rollD4 = this.rollD4.bind(this);
        this.rollDQuestion = this.rollDQuestion.bind(this);
    }

    rollDice(sides) {
        this.setState(() => ({
            lastResult: null
          }));
        document.getElementsByClassName("results")[0].style.color = "#0000FF";
        var roll = seedrandom();
        var x = 1 + Math.floor(sides * roll());
        this.setState(() => ({
            lastResult: x
          }));
          setTimeout(function(){
            document.getElementsByClassName("results")[0].style.color = "#000000";
        },1000);
        let tempArr = this.state.history;
        if(tempArr.length <= 7) {
            tempArr.unshift(x);
        }
        if(tempArr.length > 7) {
            tempArr.pop();
            tempArr.unshift(x);
        }
        this.setState(() => ({
            history: tempArr
        }));
    }

    rollD20() {
        this.rollDice(20);
    }

    rollD12() {
        this.rollDice(12);
    }

    rollD10() {
        this.rollDice(10);
    }

    rollD8() {
        this.rollDice(8);
    }

    rollD6() {
        this.rollDice(6);
    }

    rollD4() {
        this.rollDice(4);
    }

    handleChange(evt) {
        const y = (evt.target.validity.valid) ? evt.target.value : this.state.customInput;
        this.setState(() => ({
            customInput: y
          }));
      }

    rollDQuestion() {
        this.rollDice(this.state.customInput);
    }

    render() {
        return (
                      <Navbar bg="dark" variant="dark" className="all-dice">
                      <div className="results-container">
                        <div className="results-label">Last Roll: </div>
                        <div className="results"> { this.state.lastResult }</div>
                        </div>
                        <Button variant="secondary" className="die" onClick={this.rollD20}>D20</Button>
                        <Button variant="secondary" className="die" onClick={this.rollD12}>D12</Button>
                        <Button variant="secondary" className="die" onClick={this.rollD10}>D10</Button>
                        <Button variant="secondary" className="die" onClick={this.rollD8}>D8</Button>
                        <Button variant="secondary" className="die" onClick={this.rollD6}>D6</Button>
                        <Button variant="secondary" className="die" onClick={this.rollD4}>D4</Button>
                        <div className="custom-container">
                        <div className="custom-label">Custom: </div>
                        <input className="custom-input" type="text" pattern="[0-9]*" onInput={this.handleChange.bind(this)} value={this.state.customInput} />
                        </div>
                        <Button variant="secondary" className="custom-die" onClick={this.rollDQuestion}>D?</Button>
                        <div className="history">
                            {this.state.history.map((x) => (
                                <div className="hist-rolls">{ x }</div>
                            ))}
                        </div>
                      </Navbar>
        )
    }
}

export default DiceContainer;