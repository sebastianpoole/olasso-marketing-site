import React from 'react';
import MailChimpSignUp from './services/MailchimpSignUpForm/MailchimpSignUp'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.helpPanel = this.helpPanel.bind(this);
    this.state = {
      helpSelection: 'MarketingBranding'
    };
  }

  helpPanel(e) {
    var targetValue = e.target.value;
    this.setState({ 
     helpSelection: targetValue,
    })
  }

  scrollToView = (linkValue) => (e) => {
  	var scroll_value = linkValue;
  	switch(scroll_value) {
  		case 'home':
  		  return this.home.scrollIntoView({behavior: 'smooth'});
  		case 'how':
  		  return this.how.scrollIntoView({behavior: 'smooth'});
  		case 'signUp':
  		  return this.signUp.textInput.scrollIntoView({behavior: 'smooth'});
  		case 'ref':
  		  return this.ref.scrollIntoView({behavior: 'smooth'});
  		default: 
  		  return this.home.scrollIntoView({behavior: 'smooth'});
  	} 
  }

  render() {

  	return(
  	  <div>
  	    <section className="background-body" ref={(ho) => this.home = ho}>
        <div className="row top-splash">
          <div className="col">
            <h1 className="splash-logo"><span className="olasso-logo"><span className="olasso-o">O</span>lasso</span></h1>
            <h1 className="splash-logo">is coming.</h1>
            <h3 className="splash-logo-small">Modern reverse, last, and micro global logistics.</h3>
            <MailChimpSignUp ref={(ch) => this.signUp = ch} />
          </div>
        </div>
        </section>
      </div>
    )
  }
}

export default Home;