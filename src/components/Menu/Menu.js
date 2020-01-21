import React, { Component } from 'react';

import TopMenu from './TopMenu/TopMenu';
import TabView from './Tabs/TabView';

import HubsMenuContent from './Hubs/Hubs';
import PeopleMenuContent from './People/People';
import NotificationsMenuContent from './Notifications/Notifications';


export default class Menu extends Component {

    tabs = [
        { name: 'Hubs', component: <HubsMenuContent /> },
        { name: 'People', component: <PeopleMenuContent /> },
        { name: 'Notifications', component: <NotificationsMenuContent /> }
    ];

    render() {
        return (
            <div id='app__menu'>
                <TopMenu />
                <TabView tabs={this.tabs}/>
            </div>
        );
    }
}

