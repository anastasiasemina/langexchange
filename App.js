import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Login from './components/login'
import Header from './Header/header'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <div className="App">
       <button onClick={() => this.props.history.push('/login')}>Login</button>
       <Header />
       <Login />
    </div>
  );
  }
}

export default App;
