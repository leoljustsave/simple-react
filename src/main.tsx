import { StrictMode } from 'react';
import { render } from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/routes';

import '@/asset/scss/reset.scss';

render(
  <StrictMode>
    <HashRouter>{renderRoutes(routes)}</HashRouter>
  </StrictMode>,
  document.getElementById('root'),
);
