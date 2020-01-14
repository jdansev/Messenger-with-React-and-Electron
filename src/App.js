import React, { Component } from 'react';

import Menu from './Menu/Menu';
import AppContainer from './AppContainer/AppContainer';

const MenuDimOverlay = () => <div className="menu__dim"></div>;

export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu />
                <MenuDimOverlay />
                <AppContainer />
            </React.Fragment>
        );
    }
    
}
