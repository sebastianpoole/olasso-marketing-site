import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/index';
import './App.css';
import logo from './components/Logo/logo-white.png'
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.state = {
    current: 'mail',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  focus() {
    this.body.signUp.textInput.focus();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header pull-left">
              <div className="menu-logo">
                <a href="/">
                  <img className="" src={logo} alt="Olasso Logo" />
                </a>
              </div>
            </div>
            <div className="navbar-header pull-right">
              <Button className="main-navigation__enquiry" onClick={this.focus.bind(this)}>Get In Touch</Button>
            </div>
          </div>
          </div>
          <div className="container-fluid content-body">
            <div className="">
              <Switch>
                <Route exact path="/" render={()=><Home ref={(bd) => this.body = bd} />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
