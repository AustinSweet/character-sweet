import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./AbilityScoreContainer.css";

class AbilityScoreContainer extends Component {

    constructor(props) {
        super(props);
        let as = localStorage.getItem("AbilityScoreArray");
        let arr = JSON.parse(as);
        if (as !== null) {
            this.state = {
                nameField: '',
                scoreField: '',
                modifierField: '',
                AbilityScoreArray: arr,
                isHidden: true
            }
        }
        else {
            this.state = {
                AbilityScoreArray: []
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm(){
        this.setState(() => ({
            isHidden: !this.state.isHidden
        }));
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
      handleSubmit(event) {
        event.preventDefault();
        const { nameField, scoreField, modifierField } = this.state;
        console.log(nameField);
        this.setState(prevState => ({
            AbilityScoreArray: [...prevState.AbilityScoreArray,
                                { 'name': nameField,
                                    'score': scoreField,
                                    'modifier': modifierField }]
        }));
      }

    render(){
        return(
            <div className="ability-score-wrapper">
                <Button variant="secondary" onClick={this.toggleForm}>Add Ability Score</Button>
                {this.state.isHidden && <div className="add-ability-score">
                    <form onSubmit={this.handleSubmit} autoCapitalize="on" autoComplete="off">
                        <label>
                            Name:
                            <input type="text" className="score-field" name="nameField" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Score:
                            <input type="text" className="score-field" name="scoreField" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Modifier:
                            <input type="text" className="score-field" name="modifierField" onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" value="Add"></input>
                    </form>
                </div>}
                <hr></hr> 
                <div className="ability-scores">
                    {this.state.AbilityScoreArray.map((x) => (
                        <div className="score-wrapper" key={x.name}>
                            <div id="name">{x.name}</div>
                            <div id="score">{x.score}</div>
                            <div id="mod">{x.modifier}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default AbilityScoreContainer;