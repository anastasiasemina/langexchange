import React, { Component } from 'react';
import './header.css'


class Header extends React.Component {
    
  render (){
    return (
       <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main header">
            <div className="container">
              <hi className="site-title">Langexchange</hi>
            </div>
          </div>
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><a href="#">Homepage</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Learning space</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    );
  }  
}

export default Header;