import React, { Component } from 'react'
import { Button } from 'antd'


export default class MailChimpSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: ''
    };
  }

  render() {
	return(
      <form action="https://olasso.us12.list-manage.com/subscribe/post" method="POST" noValidate className="home-signup">
        <input type="hidden" name="u" value="5d563ebc7dc6989932c04f25f"/>
        <input type="hidden" name="id" value="0a45a91430"/>
        <div>
            <label htmlFor='mailform'>
            <input 
              type           = "email" 
              name           = "EMAIL" 
              id             = "mailform"
              value          = {this.state.emailValue} 
              onChange       = { (e)=>{this.setState({emailValue: e.target.value});} } 
              autoCapitalize = "off" 
              autoCorrect    = "off"
              placeholder    = "name@company.com"
              className      = "home-signup__input"
              autoFocus
              ref            = {(input) => { this.textInput = input }}
             />
            </label>
            <Button type="primary" htmlType="submit" className="home-signup__button">Get Started</Button>
        </div>
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">                  
          <label htmlFor="b_email">Email: </label>
          <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>
        </div>
      </form>
	)
  }
}