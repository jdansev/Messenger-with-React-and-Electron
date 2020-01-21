import React, { Component } from 'react';

export default class HubInfo extends Component {
    render() {
        return (
            <div name="hub-info" className="page__hub-info">
                <span className="tab--title">About this Hub</span>
                <div id="hub-info-name"></div>
                <div id="hub-info-members"></div>
            </div>
        );
    }
}