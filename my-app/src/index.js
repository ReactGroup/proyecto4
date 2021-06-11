import './index.css';

import App from './App';
import CoinProvider from './coinProvider/CoinProvider'
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <React.StrictMode>
    <CoinProvider>
        <App />
    </CoinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

