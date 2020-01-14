import React, { Component } from 'react';

import MessageInputBar from './MessageInputBar/MessageInputBar';





const TopBar = () => {
    return (
        <div className="app__top-bar">
            <div className="menu__btn">
                <img className="menu__btn--light" src="images/menu-btn-light.png" />
                <img className="menu__btn--dark" src="images/menu-btn-dark.png" />
            </div>
        </div>
    );
}

const MessageFeed = () => {
    return (
        <div className="app__message-feed">
			<div className="messages__container"></div>
			<div className="scroll__container">
				<div className="scroll__view"></div>
			</div>
		</div>
    );
}




class AppContainer extends Component {
    render() {
        return (
            /* Avoid extra wrapping <div> in React
            - https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
            */
           <div id='app__container'>
               <React.Fragment>
                    <TopBar />
                    <MessageFeed />
                    <MessageInputBar />
                </React.Fragment>
           </div>
            
        );
    }
}


export default AppContainer



