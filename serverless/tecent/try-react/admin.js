import React from 'react';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import { Row, Col } from 'antd';
import './common.less';

export default class Admin extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <Row type="flex" justify="center">
            <Col span={2}>
              <NavLeft />
            </Col>
            <Col span={10}>
              {this.props.children}
            </Col>
            <Col span={5} >
              <NavRight />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}