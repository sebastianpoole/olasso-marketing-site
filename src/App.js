import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/index';
import './App.css';

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
