import React, { Component } from 'react';


const SpectrumDropdownListItem = props => {
    return <li onClick={props.onItemClick}>{props.value}</li>;
}

const SpectrumDropdownList = props => {
    return (
        <ul className="dropdown-menu">
            {Object.keys(props.spectrumList).map((key, index) => {
                return (
                    <SpectrumDropdownListItem
                        onItemClick={(event) => props.onItemClick(event, key)}
                        value={key}
                        key={index} />
                );
            })}
        </ul>
    );
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
        selectionName: Object.keys(this.spectrums)[0], // first spectrum is the default
    };

    itemClickHandler = (_, selectedItemName) => {
        this.setState({
            selectionMade: true,
            selectionName: selectedItemName,
        });
    }

    render() {
        const defaultLabel = 'Choose a spectrum';
        const { selectionMade, selectionName } = this.state;
        const selectionLabel = !selectionMade ? defaultLabel : selectionName;
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