import React, { Component } from 'react';



export default class TopMenu extends Component {

    floatLeftStyle = {
        float: 'left',
    };

    floatRightStyle = {
        float: 'right',
    }

    render() {
        return (
            <div className="app__menu__top">

                {/* TODO: fix inline-styles */}
                <div style={this.floatLeftStyle} className="app__menu__top--options">
                    <span className="option">Profile</span>
                </div>

                {/* TODO: fix inline-styles */}
                <div style={this.floatRightStyle} className="app__menu__top--options">
                    <span className="option">Settings</span> |
                    <span className="option">Logout</span>
                </div>
                
            </div>
        );
    }
}