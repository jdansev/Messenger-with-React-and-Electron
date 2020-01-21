import React, { Component } from 'react';
import SearchBar from '../ReusableElements/SearchBar/SearchBar';

export default class HubList extends Component {
    render() {
        return (
            <div name="hub-main" className="page__hub-main">

                <SearchBar searchType='hub-search'/>

                <div className="tab__head">
                    <span id="hubs__title" className="tab--title">Your Hubs</span>
                    <span id="create-hub">+</span>
                </div>

                <div className="results-count"></div>

                <div id="list__hubs" className="tab__list"></div>

            </div>
        );
    }
}