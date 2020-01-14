import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Menu from './Menu/Menu';
import AppContainer from './AppContainer/AppContainer';

ReactDOM.render(
  <Menu />,
  document.getElementById('app__menu')
);


ReactDOM.render(
  <AppContainer />,
  document.getElementById('app__container')
);