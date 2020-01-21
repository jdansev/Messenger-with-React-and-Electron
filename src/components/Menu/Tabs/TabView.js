import React,  { Component } from 'react';

import TabBar from './TabBar';
import Tab from './Tab';
import TabContent from './TabContent';


export default class TabView extends Component {

    render() {
        const { tabs } = this.props;

        return (
            <React.Fragment>
                <TabBar>
                    {tabs.map((tab, index) => <Tab name={tab.name} key={index} />)}
                </TabBar>
                <TabContent>
                    {tabs.map((tab, _) => tab.component)}
                </TabContent>
            </React.Fragment>
        );

    }

}