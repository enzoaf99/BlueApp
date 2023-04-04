import React from 'react';
import ReactDOM from 'react-dom/client';
import {CardPrices} from './components/CardPrices';
import {NavBar} from './components/NavBar';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <CardPrices />
  </React.StrictMode>,
)
