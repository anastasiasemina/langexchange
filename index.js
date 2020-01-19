import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Login from './components/login';
import Header from './Header/header';
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
    <div>
        <Route exact path='/' component={Header} />
        <Route exact path='/login' component={App} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
