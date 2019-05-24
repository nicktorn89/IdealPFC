import React from 'react';
import Routes from './routes';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './theme/reset.css';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
      <Routes />
  </AppContainer>
  ,
  rootEl,
);
