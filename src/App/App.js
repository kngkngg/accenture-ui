import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';


import Navigation from '../navigation/navigation';
import Home from '../home/home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={Home}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
