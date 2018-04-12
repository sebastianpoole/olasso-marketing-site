import React, {Component} from 'react'
import ImageOne from '../../assets/images/01-marketing-returns-selling-point_original.png'
import ImageTwo from '../../assets/images/01-marketing-returns-repeat-purchasing.png'
import ImageThree from '../../assets/images/01-marketing-returns-effective-communication.png'
import ImageFour from '../../assets/images/01-marketing-returns-multiple-options.png'
import ImageFive from '../../assets/images/01-marketing-customised-ui.png'

export default class MarketingBranding extends Component {
  render() {
  	return (
      <div>
	    <div className="row home-how__images">
	    
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Reverse returns into a selling channel</h3>
            <p>Maximise your return communications and intelligently offer recommended products to your returning customers to drive a timely reinvestment of their refund.</p>
          </div>
          <div className="col-lg-4 home-how__images-right">
            <img src={ImageOne} alt="Olasso major benefits" />
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left d-none-lg-up">
            <img src={ImageTwo} alt="Olasso major benefits" />        
          </div>
          <div className="col-lg-4 home-how__images-right">
            <h3>Drive repeat purchases</h3>
            <p>Capture images of returning products to speed up the refund process and intelligently recommend products to drive repurchases and customer loyalty.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">
            <img src={ImageTwo} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Effortlessly communicate with your customers</h3>
            <p>Effective communication is key to maintaining customer loyalty throughout the return journey. Automate the return process communication through branded updates and a self-service customer dashboard.</p>
          </div>
          <div className="col-lg-4 home-how__images-right">
            <img src={ImageThree} alt="Olasso major benefits" />
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left d-none-lg-up">   
            <img src={ImageFour} alt="Olasso major benefits" />        
          </div>
          <div className="col-lg-4 home-how__images-right">
            <h3>Flexible return options available to the customer</h3>
            <p>Whether it is a drop-off at 7/11, pick-up from the customer's office, or label generation for posting the return, Olasso enables your business to offer multiple return options globally for customers to conveniently return their purchases.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">   
            <img src={ImageFour} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Customise the return journey</h3>
            <p>Brand the customer platform, communication, and experience to ensure consistency and uniqueness in your return journey.</p>
          </div>
          <div className="col-lg-4 home-how__images-right">
            <img src={ImageFive} alt="Olasso major benefits" />
          </div>
        </div>
      </div>
    )
  }
}