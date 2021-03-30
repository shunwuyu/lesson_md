import { Component } from 'react';
import { message, Row, Col } from 'antd';
import logo from '../../assets/logo_blue_1024.png';
import styles from './index.less';
import Login from './components/Login';

class Index extends Component {
  handleSubmit = () => {
  }

  render() {
    return (
      <div className={styles.content}>
        <Row>
          <Col span={24} className={styles.logo}>
            <img alt="logo" src={logo} />
          </Col>
        </Row>
        <h2 className={styles.title}>登录</h2>
        <Login onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Index;