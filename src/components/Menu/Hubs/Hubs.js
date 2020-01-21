import React, { Component } from 'react';

import HubList from './HubList';
import HubInfo from './HubInfo';
import HubCreate from './HubCreate';

export default class HubsMenuContent extends Component {

    state = { };

    render() {
        return (
            <div id="tab__hubs">
                <HubList />
                <HubInfo />
                <HubCreate />
            </div>
        );
    }
    
}

