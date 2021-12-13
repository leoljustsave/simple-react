import { StrictMode } from 'react';
import { render } from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { Routes } from '@/routes';

import '@/asset/scss/reset.scss';

render(
  <StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StrictMode>,
  document.getElementById('root'),
);
