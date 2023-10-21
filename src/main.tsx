import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { App } from './pages';
import { LocaleProvider } from './locale/LocaleContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
);
