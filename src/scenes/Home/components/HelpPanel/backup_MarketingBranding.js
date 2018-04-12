import React, {Component} from 'react'
import { Row, Col } from 'antd';
import CashImage from '../FlatIcons/cash_icon.png'

export default class MarketingBranding extends Component {
  render() {
  	return (
      <div>
      <Row className="home-why__images">
        <Col span={4} offset={4}>
    	  <img src={CashImage} alt="Olasso major benefits" />
    	  <h3>Reverse Returns into Purchases</h3>
    	</Col>
    	<Col span={4}>
    	  <img src={CashImage} alt="Olasso major benefits" />
    	  <h3>Reverse Returns into Purchases</h3>
    	</Col>
    	<Col span={4}>
    	  <img src={CashImage} alt="Olasso major benefits" />
    	  <h3>Reverse Returns into Purchases</h3>
    	</Col>
    	<Col span={4}>
    	  <img src={CashImage} alt="Olasso major benefits" />
    	  <h3>Reverse Returns into Purchases</h3>
    	</Col>
      </Row>
      <Row className="home-why__images">
        <Col span={8} offset={4}>
          <h3>Reverse Returns into Purchases</h3>
          <p>Clicks' statistics can be traced back to individual links. For each link, you can now see the number of unique clicks vs total clicks, ordered by country, device, browser, OS and pixel</p>
        </Col>
        <Col span={8}>
          <img src={CashImage} alt="Olasso major benefits" />
        </Col>
      </Row>
      <Row className="home-why__images">
        <Col span={8} offset={4}>
          <h3>Reverse Returns into Purchases</h3>
          <p>Clicks' statistics can be traced back to individual links. For each link, you can now see the number of unique clicks vs total clicks, ordered by country, device, browser, OS and pixel</p>
        </Col>
        <Col span={8}>
          <img src={CashImage} alt="Olasso major benefits" />
        </Col>
      </Row>
      </div>
    )
  }
}