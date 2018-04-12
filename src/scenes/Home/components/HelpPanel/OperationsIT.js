import React, {Component} from 'react'
import ImageOne from '../../assets/images/02-operations-returns-one-platform.png'
import ImageTwo from '../../assets/images/02-operations-returns-one-integration.png'
import ImageThree from '../../assets/images/02-operations-returns-automate-processes.png'
import ImageFour from '../../assets/images/02-operations-returns-qc-checks.png'
import ImageFive from '../../assets/images/02-operations-returns-customise-journey.png'

export default class OperationsIT extends Component {
  render() {
    return (
      <div>
       <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>One platform to manage your returns</h3>
            <p>Manage all your returns in a single location.</p>
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
            <h3>One simple integration for your global returns</h3>
            <p>Save time on development with only a single integration required to manage your global returns.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">
            <img src={ImageTwo} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>No more manual processes</h3>
            <p>Our intelligent platform automates a number of existing processes and operations to streamline the processing of your returns leading to happier customers.</p>
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
            <h3>Faster QC processing and management</h3>
            <p>Reduce time and complexities involved in the control of return quality through utilising customer-submitted images, best practices and intelligent workflows.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">   
            <img src={ImageFour} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Configure every step of the return journey</h3>
            <p>Manage every step of the return journey through our unique 'smart rules' workflow engine.</p>
          </div>
          <div className="col-lg-4 home-how__images-right">
            <img src={ImageFive} alt="Olasso major benefits" />
          </div>
        </div>
      </div>
    )
  }
}