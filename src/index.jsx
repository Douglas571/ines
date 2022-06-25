import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import store from './store'

import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <CssBaseline/>  
    <App />
  </Provider>
);
