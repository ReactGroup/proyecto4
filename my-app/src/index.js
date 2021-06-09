import './index.css';

import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import CoinProvider from './coinProvider/CoinProvider'
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <CoinProvider>

      
          <App />

    </CoinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

