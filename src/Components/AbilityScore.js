import { faPenSquare } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./AbilityScore.css";

class AbilityScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editIsHidden: false,
            nameField: '',
            scoreField: '',
            modifierField: '',
            name: this.props.info.name,
            score: this.props.info.score,
            modifier: this.props.info.modifier
        }
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleEditForm() {
        this.setState(() => ({
            //TODO this doesn't toggle the form's existence, merely the display
            //May need better solutions in the future 
            editIsHidden: !this.state.editIsHidden
        }));
    }

    handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
    }

    checkField(field) {
        if(field.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { nameField, scoreField, modifierField } = this.state;
        this.setState(() => ({
            name: this.checkField(nameField) ? nameField : this.state.name,
            score: this.checkField(scoreField) ? scoreField : this.state.score,
            modifier: this.checkField(modifierField) ? modifierField : this.state.modifier
        }));
        this.toggleEditForm();
    }

    render() {
        return (
            <div className="score-wrapper">
                <FontAwesomeIcon icon={faPenSquare} className="edit-pencil" onClick={this.toggleEditForm}></FontAwesomeIcon>
                {this.state.editIsHidden && <div className="edit-ability-score">
                    <form onSubmit={this.handleSubmit} autoCapitalize="on" autoComplete="off">
                        <label>
                            Name:
                            <input type="text" className="edit-score-field" name="nameField" placeholder={this.state.name} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Score:
                            <input type="text" className="edit-score-field" name="scoreField" placeholder={this.state.score} onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Modifier:
                            <input type="text" className="edit-score-field" name="modifierField" placeholder={this.state.modifier} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" className="edit-submit" value="Submit"></input>
                    </form>
                </div>}
                {!this.state.editIsHidden && <div>{this.state.name}</div>}
                {!this.state.editIsHidden && <div id="score">{this.state.score}</div>}
                {!this.state.editIsHidden && <div id="mod">{this.state.modifier}</div>}
            </div>
        )
    }

}

export default AbilityScore;