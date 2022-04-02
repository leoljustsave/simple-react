import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HashRouter } from 'react-router-dom';
import { Routes } from '@/routes';

import '@/asset/scss/reset.scss';

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(
  <StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StrictMode>,
);
