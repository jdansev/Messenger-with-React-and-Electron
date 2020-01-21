import React, { Component } from 'react';

export default class SearchBar extends Component {

    render() {
        return (
            <React.Fragment>
                <img src="images/search-icon.svg" className="search-icon" />
                <input className="search-bar" id={this.props.searchType} type="text" />
            </React.Fragment>
        );
    }

}