import React from 'react';
import ReactDOM from 'react-dom';
import './assets/shared.scss';
import App from './App';
import { SessionContextProvider } from './context/SessionContext';

ReactDOM.render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
