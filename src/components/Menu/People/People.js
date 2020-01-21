import React, { Component } from 'react';
import SearchBar from '../ReusableElements/SearchBar/SearchBar';


export default class PeopleMenuContent extends Component {

    render() {
        return (
            <div id="tab__people">

                <SearchBar searchType='user-search'/>

                <div className="tab__head">
                    <span id="friends__title" className="tab--title">Your Friends</span>
                </div>

                <div className="results-count"></div>

                <div id="list__friends" className="tab__list"></div>

            </div>
        );
    }

}