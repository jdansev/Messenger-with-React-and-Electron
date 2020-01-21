import React, { Component } from 'react';


export default class Tab extends Component {

    render() {
        let { name } = this.props;
        const label = name.toLowerCase();
        return (
            <li><a href="#" name={`#tab__${label.toLowerCase()}`}>{label}</a>
                <div id={`${label}-alert-badge`} className="alert-badge"></div>
            </li>
        );
    }
    
}


