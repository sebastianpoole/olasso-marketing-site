import React, {Component} from 'react'
import ImageOne from '../../assets/images/03-finance-returns-ltv.png'
import ImageTwo from '../../assets/images/03-finance-returns-reduce-returns.png'
import ImageThree from '../../assets/images/03-finance-returns-increase-reach.png'
import ImageFour from '../../assets/images/03-finance-returns-reduce-logistics.png'
import ImageFive from '../../assets/images/03-finance-returns-increase-employee-efficiency.png'

export default class FinanceAccounting extends Component {
  render() {
    return (
      <div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>It's simple, reduce returns</h3>
            <p>AI features help tackle returns through insights into high-returning customers, locations, and products.</p>
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
            <h3>Increase the customer lifetime value</h3>
            <p>91% of customers consider your return policy before shopping. Promote repeat purchasing through offering a simple and efficient return journey.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">
            <img src={ImageTwo} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Support for global expansion</h3>
            <p>Reduce the logistical headaches when expanding to new markets as Olasso can manage your returns globally.</p>
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
            <h3>Reduce logistics costs</h3>
            <p>Reduce your return unit economics through utilising out optimised supply chain, best practices and consolidation centres, from the comfort of your home market.</p>
          </div>
          <div className="col-lg-4 offset-2 home-how__images-left d-lg-down">   
            <img src={ImageFour} alt="Olasso major benefits" />        
          </div>
        </div>
        <div className="row home-how__images">
          <div className="col-lg-4 offset-2 home-how__images-left">
            <h3>Increase operational efficiencies</h3>
            <p>Save employees time and costs through automating operational processes and reducing the manual workloads associated with managing 03-finance-returns-ltv</p>
          </div>
          <div className="col-lg-4 home-how__images-right">
            <img src={ImageFive} alt="Olasso major benefits" />
          </div>
        </div>
      </div>
    )
  }
}