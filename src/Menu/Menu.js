import React, { Component } from 'react';




const RadioButton = (props) => {
    return (
        <div className="radio-pair">
            <input onChange={props.changed} type="radio" id={props.id} name="hub-visibility" checked={props.isSelected}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}


// TODO: Convert this radio group into a reusable, stylable component
class RadioButtonGroup extends Component {
    state = {
        hubStatus: 'public',
    };
    radioChangeHandler = (event) => {
        console.log(event.target);
    }
    render() {
        const publicStatus = 'public';
        const privateStatus = 'private';
        const secretStatus = 'secret';
        return (
            <React.Fragment>
                <RadioButton changed={this.radioChangeHandler} label={publicStatus} id={publicStatus}/>
                <RadioButton changed={this.radioChangeHandler} label={privateStatus} id={privateStatus}/>
                <RadioButton changed={this.radioChangeHandler} label={secretStatus} id={secretStatus}/>
            </React.Fragment>
        );
    }
}




class Menu extends Component {
    render() {

        const floatLeftStyle = {
            float: 'left',
        };
        const floatRightStyle = {
            float: 'right',
        }

        return (



            /* Begin App Menu */
            <div id='app__menu'>


                {/* Begin Top Menu */}
                <div className="app__menu__top">
                    {/* TODO: fix inline-styles */}
                    <div style={floatLeftStyle} className="app__menu__top--options">
                        <span className="option">Profile</span>
                    </div>
                    {/* TODO: fix inline-styles */}
                    <div style={floatRightStyle} className="app__menu__top--options">
                        <span className="option">Settings</span> |
                        <span className="option">Logout</span>
                    </div>
                </div>
                {/* End Top Menu */}



                {/* Begin Tab Bar */}
                <ul className="clearfix" id="tabs">
                    <li><a href="#" name="#tab__hubs">Hubs</a>
                        <div id="hub-alert-badge" className="alert-badge"></div>
                    </li>
                    <li><a href="#" name="#tab__people">People</a>
                        <div id="people-alert-badge" className="alert-badge"></div>
                    </li>
                    <li><a href="#" name="#tab__notifications">Notifications</a>
                        <div id="notification-alert-badge" className="alert-badge"></div>
                    </li>
                </ul>
                {/* End Tab Bar */}



                {/* Begin Content Tab */}
                <div id="tab__content">


                    {/* Begin People Tab */}
                    <div id="tab__people">
                        <img src="images/search-icon.svg" className="search-icon" />

                        <input className="search-bar" id="user-search" type="text" />

                        <div className="tab__head">
                            <span id="friends__title" className="tab--title">Your Friends</span>
                        </div>

                        <div className="results-count"></div>

                        <div id="list__friends" className="tab__list"></div>
                    </div>
                    {/* End People Tab */}




                    {/* Begin Hubs Tab */}
                    <div id="tab__hubs">



                        {/* Begin Main Hub Page */}
                        <div name="hub-main" className="page__hub-main">

                            <img src="images/search-icon.svg" className="search-icon" />
                            <input id="hub-search" className="search-bar" type="text" />

                            <div className="tab__head">
                                <span id="hubs__title" className="tab--title">Your Hubs</span>
                                <span id="create-hub">+</span>
                            </div>

                            <div className="results-count"></div>

                            <div id="list__hubs" className="tab__list"></div>
                        </div>
                        {/* End Main Hub Page */}



                        {/* Begin Hub Info Page */}
                        <div name="hub-info" className="page__hub-info">
                            <span className="tab--title">About this Hub</span>
                            <div id="hub-info-name"></div>
                            <div id="hub-info-members"></div>
                        </div>
                        {/* End Hub Info Page */}




                        {/* Begin Create Hub Page */}
                        <div name="create-hub" className="page__create-hub">
                            <span className="tab--title">Create a Hub</span>


                            <form id="create-hub-form">

                                <input id="hub-name" name="hub-name" type="text" placeholder="Name" />

                                <div className="radio-group">
                                    <RadioButtonGroup />
                                </div>


                                {/* Begin Dropdown Container */}
                                <div className="dropdown__container">
                                    <div className="dropdown">

                                        <div className="select">
                                            <span>Spectrum</span>
                                        </div>

                                        <input type="hidden" name="gender" />

                                        <ul className="dropdown-menu"></ul>
                                        
                                    </div>
                                </div>
                                {/* End Dropdown Container */}


                                <button type="submit" className="typ__btn">Create</button>

                            </form>


                        </div>
                        {/* End Create Hub Page */}
                        

                    </div>
                    {/* End Hubs Tab */}
                    


                    {/* Begin Notifications Tab */}
                    <div id="tab__notifications">
                        <span className="tab--title">Notifications</span>

                        <div id="list__notifications" className="tab__list">
                            <div className="list__item">
                                <div className="item--name">John accepted your friend request</div>
                            </div>
                        </div>
                    </div>
                    {/* End Notifications Tab */}


                {/* End Content Tab */}
                </div>


            </div>
            /* End App Menu */


        );
    }
}





export default Menu;
