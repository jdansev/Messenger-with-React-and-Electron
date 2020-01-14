import React, { Component } from 'react';



const SpectrumDropdownListItem = props => {
    return (
        <li onClick={props.onItemClick}>{props.value}</li>
    );
}

class SpectrumDropdownList extends Component {

    clickHandler = (event, key) => {
        console.log('clicked!!!');
        console.log(event.target);
        console.log(key);
    }

    render() {
        return (
            <ul className="dropdown-menu">
                {Object.keys(this.props.spectrumList).map((key, _) => {
                    return <SpectrumDropdownListItem onItemClick={(event) => this.props.onItemClick(event, key)} value={key}/>;
                })}
            </ul>
        );
    }
}

export default class SpectrumDropdown extends Component {

    spectrums = {
        'Endless River': ['#43cea2', '#185a9d'],
        'Redish Yellow': ['#f1c40f', '#e74c3c'],
        'Vivid': ['#fcb045', '#ee0979'],
        'Ibiza Sunset': ['#ff6a00','#ee0979'],
        'Ocean': ['#36D1DC','#5B86E5'],
        'Purplish Red': ['#8e44ad','#c0392b'],
        'Redgray': ['#f3f3f3','#5B86E5'],
        'Quepal': ['#38ef7d', '#11998e'],
    };

    state = {
        selectionMade: false,
        selectionName: Object.keys(this.spectrums)[0],
    };

    itemClickHandler = (_, selectedItemName) => {
        this.setState({
            selectionMade: true,
            selectionName: selectedItemName,
        });
    }

    render() {
        const defaultLabel = 'Choose a spectrum';
        const selectionLabel = !this.state.selectionMade ? defaultLabel : this.state.selectionName;
        return (
            <div className="dropdown__container">
                <div className="dropdown">
                    <div className="select">
                        <span>{selectionLabel}</span>
                    </div>
                    <SpectrumDropdownList onItemClick={this.itemClickHandler} spectrumList={this.spectrums}/>
                </div>
            </div>
        );
    }
}