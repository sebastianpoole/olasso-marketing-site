import React from 'react';
import { Button } from 'antd';
import MailChimpSignUp from './services/MailchimpSignUpForm/MailchimpSignUp'
import Slider from 'react-slick'
import SliderOne from './assets/images/olasso-main-one-platform.png'
import SliderTwo from './assets/images/olasso-main-save-return.png'
import SliderThree from './assets/images/olasso-main-customer-journey.png'
import SliderFour from './assets/images/olasso-main-business-insights.png'
import SliderFive from './assets/images/olasso-main-automate-processes.png'
import MarketingBranding from './components/HelpPanel/MarketingBranding'
import OperationsIT from './components/HelpPanel/OperationsIT'
import FinanceAccounting from './components/HelpPanel/FinanceAccounting'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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

  	var settings = {
      dots: true
    };

    const { helpSelection } = this.state

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