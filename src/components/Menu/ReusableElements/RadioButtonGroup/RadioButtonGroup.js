


import React,  { Component } from 'react';

const RadioButton = (props) => {
    return (
        <div className="radio-pair">
            <input onChange={props.changed} type="radio" id={props.id} name="hub-visibility" checked={props.isSelected}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}


// TODO: Convert this radio group into a reusable, stylable component
export default class RadioButtonGroup extends Component {

    state = {
        hubStatus: 'public'
    };

    radioChangeHandler = (event) => {
        console.log(event.target);
    }

    render() {

        const publicStatus = 'public';
        const privateStatus = 'private';
        const secretStatus = 'secret';

        return (
            <div className="radio-group">
                <RadioButton changed={this.radioChangeHandler} label={publicStatus} id={publicStatus}/>
                <RadioButton changed={this.radioChangeHandler} label={privateStatus} id={privateStatus}/>
                <RadioButton changed={this.radioChangeHandler} label={secretStatus} id={secretStatus}/>
            </div>
        );
    }

}


