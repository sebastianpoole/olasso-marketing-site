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
  	    <section className="home-hero" ref={(ho) => this.home = ho}>
        <div className="row">
          <div className="col home-hero__content">
            <h1>Why Are Returns So Difficult?</h1>
            <p className="home-hero__text">Say hello to <span className="olasso-logo">Olasso</span>, a global returns management solution. <br />Enter your details below to find out more!</p>
            <MailChimpSignUp ref={(ch) => this.signUp = ch} />
          </div>
        </div>
        <div className="row">
    	    <div className="col">
    	        <Slider {...settings} className="home-slider">
                  <div><img src={SliderOne} className="home-slider__image" alt="Olasso - Single Platform for Returns Management" /></div>
                  <div><img src={SliderTwo} className="home-slider__image" alt="Olasso - Save Cost on Return Logistics" /></div>
                  <div><img src={SliderThree} className="home-slider__image" alt="Olasso - Enhance the Customer Journey" /></div>
                  <div><img src={SliderFour} className="home-slider__image" alt="Olasso - Return Insights" /></div>
                  <div><img src={SliderFive} className="home-slider__image" alt="Olasso - Automate Business Processes" /></div>
                </Slider>
    	    </div>
    	  </div>
        </section>
        <section className="home-references" ref={(ref) => this.ref = ref}>
    	  <div className="row home-references__content">
    	    <div className="col home-references__title">
    	      <h1>How does <span className="olasso-logo">Olasso</span> work?</h1>
    	      <div className="row home-references__icons">
    	        <div className="col-lg-3">
    	          <i className="fas fa-shopping-bag"></i>
    	          <p>Buy online through your favourite retailer and receive your parcel.</p>
    	        </div>
    	        <div className="col-lg-3">
    	          <i className="fas fa-mobile-alt"></i>
    	          <p>Need to return your purchase? <span className="olasso-logo">No issues.</span> Follow the retailer's instructions to their branded <span className="olasso-logo">Olasso</span> return platform. Lodge the return from your mobile or desktop device in 5 easy steps.</p>
    	        </div>
    	        <div className="col-lg-3">
    	          <i className="fas fa-shipping-fast"></i>
    	          <p>Drop off the return at your nearest 7/11, schedule a pick up, or download a generated label to simply post the return.</p>
    	        </div>
    	        <div className="col-lg-3">
    	          <i className="fas fa-hand-holding-usd"></i>
    	          <p>Your refund or store credit can be processed within 24 hours. Time to start browsing online again!</p>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</section>
    	<section className="home-how">
    	  <div className="row">
    	    <div className="col">
    	      <div className="col home-how__title">
    	        <h1>How can <span className="olasso-logo">Olasso</span> help you?</h1>
    	      </div>
    	    </div>
    	  </div>
    	  <div className="row home-how__buttons" ref={(how) => this.how = how}>
    	    <div className="col">
    	      <Button onClick={ this.helpPanel } value="MarketingBranding">
    	        Marketing & Branding
    	      </Button>
    	      <Button onClick={ this.helpPanel } value="OperationsIT">
    	        Operations & IT
    	      </Button>
    	      <Button onClick={ this.helpPanel } value="FinanceAccounting">
    	        Finance & Accounting
    	      </Button>
    	    </div>
    	  </div>   
    	  <ReactCSSTransitionGroup
        transitionName="component-fade-left"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}> 	  
    	  { helpSelection === 'MarketingBranding' && <MarketingBranding /> }
    	  { helpSelection === 'FinanceAccounting' && <FinanceAccounting /> }
    	  { helpSelection === 'OperationsIT' && <OperationsIT /> }
    	  </ReactCSSTransitionGroup>
    	</section>
    	<footer className="footer">
    	  <div className="row">
    	    <div className="col-sm-3 offset-sm-3 footer__left">
    	      <ul>
    	        <li><a onClick={this.scrollToView('home')}>Home</a></li>
    	        <li><a onClick={this.scrollToView('ref')}>How Does Olasso Work?</a></li>
    	        <li><a onClick={this.scrollToView('how')}>How Can Olasso Benefit Me?</a></li>
    	        <li><a onClick={this.scrollToView('signUp')}>Get In Touch</a></li>
    	      </ul>
    	    </div> 
    	    <div className="col-sm-3 offset-sm-1 footer__right">
    	      <p className="footer__title">Where to Find Us!</p>
    	      <p>242-244 Des Voeux Road</p>
    	      <p>Sheung Wan</p>
    	      <p>Hong Kong</p>
    	    </div>
    	  </div>
    	  <div className="row">
    	    <div className="col-lg-12 legal">
    	      © Olasso Limited 2018
    	    </div>
    	  </div>
    	</footer>
      </div>
    )
  }
}

export default Home;