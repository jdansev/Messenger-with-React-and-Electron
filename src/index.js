import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import MessageInputBar from './MessageInputBar/MessageInputBar';
import AppContainer from './AppContainer/AppContainer';

// ReactDOM.render(
//   <MessageInputBar />,
//   document.getElementById('message-input-bar')
// );


ReactDOM.render(
  <AppContainer />,
  document.getElementById('app__container')
);