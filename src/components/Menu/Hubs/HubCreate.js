






import React, { Component } from 'react';

import SpectrumDropdown from '../ReusableElements/SpectrumDropdown/SpectrumDropdown';
import RadioButtonGroup from '../ReusableElements/RadioButtonGroup/RadioButtonGroup';


export default class HubCreate extends Component {
    render() {
        return (
            <div name="create-hub" className="page__create-hub">
                <span className="tab--title">Create a Hub</span>

                <form id="create-hub-form">
                    <input id="hub-name" name="hub-name" type="text" placeholder="Name" />

                    <RadioButtonGroup />
                    <SpectrumDropdown />

                    <button type="submit" className="typ__btn">Create</button>
                </form>

            </div>
        );
    }
}