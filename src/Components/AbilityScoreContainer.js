import { faPenSquare } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                id: 1,
                nameField: '',
                scoreField: '',
                modifierField: '',
                AbilityScoreArray: arr,
                addIsHidden: true,
                editIsHidden: false
            }
        }
        else {
            this.state = {
                AbilityScoreArray: []
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleAddForm = this.toggleAddForm.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
    }

    toggleAddForm(){
        this.setState(() => ({
            addIsHidden: !this.state.addIsHidden
        }));
    }

    toggleEditForm(){
        this.setState(() => ({
            editIsHidden: !this.state.editIsHidden
        }));
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    increment() {
        let newId = 1 + this.state.id;
        this.setState(() => ({
            id: newId
        }));
    }

    handleEdit(event) {
        const { nameField, scoreField, modifierField } = this.state;
        let scores = this.state.AbilityScoreArray;
        let index = scores.findIndex(e => e.id === event.id)
        scores[index] = {   'id': event.id,
                            'name': nameField,
                            'score': scoreField,
                            'modifier': modifierField }
        this.setState(() => ({
            AbilityScoreArray: scores
        }))
        this.toggleEditForm();
    }
      
    handleSubmit(event) {
        event.preventDefault();
        const { nameField, scoreField, modifierField } = this.state;
        console.log(nameField);
        this.setState(prevState => ({
            AbilityScoreArray: [...prevState.AbilityScoreArray,
                                {   'id': this.state.id,
                                    'name': nameField,
                                    'score': scoreField,
                                    'modifier': modifierField }]
        }));
        this.increment();
      }

    render(){
        return(
            <div className="ability-score-wrapper">
                <Button variant="secondary" onClick={this.toggleAddForm}>Add Ability Score</Button>
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
                        <div className="score-wrapper" key={x.name}>
                            {!this.state.editIsHidden && <div id="name">{x.name}</div>}
                            {!this.state.editIsHidden && <div id="score">{x.score}</div>}
                            {!this.state.editIsHidden && <div id="mod">{x.modifier}</div>}
                            <FontAwesomeIcon className="edit-pencil" icon={faPenSquare} onClick={this.toggleEditForm}></FontAwesomeIcon>
                            {this.state.editIsHidden && <div>
                    <form onSubmit={() => this.handleEdit(x)} autoCapitalize="on" autoComplete="off" className="edit-form">
                        <label>
                            Name:
                            <input type="text" className="edit-score-field" name="nameField" placeholder={x.name} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Score:
                            <input type="text" className="edit-score-field" name="scoreField" placeholder={x.score} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Modifier:
                            <input type="text" className="edit-score-field" name="modifierField" placeholder={x.modifier} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" className="edit-submit" value="Submit"></input>
                    </form>
                </div>}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default AbilityScoreContainer;