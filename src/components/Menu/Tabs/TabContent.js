

import React, { Component } from 'react';


export default class TabContent extends Component {

    render() {
        return (
            <div id="tab__content">
                {this.props.children}
            </div>
        );
    }

}

