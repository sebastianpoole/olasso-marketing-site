import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/index';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
              <h1 className="App-title">Olasso</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
