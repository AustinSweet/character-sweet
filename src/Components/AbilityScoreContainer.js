import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AbilityScore from './AbilityScore';
import "./AbilityScoreContainer.css";

class AbilityScoreContainer extends Component {

    constructor(props) {
        super(props);
        let as = localStorage.getItem("AbilityScoreArray");
        let arr = JSON.parse(as);
        if (as !== null) {
            this.state = {
                id: 0,
                nameField: '',
                scoreField: '',
                modifierField: '',
                AbilityScoreArray: arr,
                addIsHidden: true,
            }
        }
        else {
            this.state = {
                AbilityScoreArray: []
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleAddForm = this.toggleAddForm.bind(this);
    }

    toggleAddForm() {
        this.setState(() => ({
            addIsHidden: !this.state.addIsHidden
        }));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    increment() {
        let newId = 1 + this.state.id;
        this.setState(() => ({
            id: newId
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { nameField, scoreField, modifierField } = this.state;
        this.setState(prevState => ({
            AbilityScoreArray: [...prevState.AbilityScoreArray,
            {
                'id': this.state.id,
                's': {
                    'name': nameField,
                    'score': scoreField,
                    'modifier': modifierField
                }
            }]
        }));
        this.increment();
    }

    render() {
        return (
            <div className="ability-score-wrapper">
                <Button variant="secondary" className="add-as-btn" onClick={this.toggleAddForm}>Add Ability Score</Button>
                {this.state.addIsHidden && <div className="add-ability-score">
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
                        <AbilityScore key={x.id} info={x.s}></AbilityScore>
                    ))}
                </div>
            </div>
        )
    }

}

export default AbilityScoreContainer;