import React, { Component } from 'react';


export default class TabBar extends Component {

    state = {
        activeTab: null,
    };

    render() {

        return (
            <ul className="clearfix" id="tabs">
                {this.props.children}
            </ul>
        );

    }
}

