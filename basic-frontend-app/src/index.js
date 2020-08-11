//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import './App.css';
import Create from './components/Create';

import MyEvent from "./components/MyEvent";

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
