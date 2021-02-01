import React, { Component } from 'react';
import config from './config'
import './Login.css';
import { Form,  Input, Row, Button } from 'antd';
const { FormItem } = Form
export default class Login extends Component {
  handleOk = values => {
  }
  render() {
    return (
      <div className="form">
        <div className="logo">
          <img src={config.logoPath} alt="logo"/>
          <span>{config.siteName}</span>
        </div>
        <Form>
          <Form.Item name="username">
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="请输入密码"/>
          </Form.Item>
          <Row>
            <Button
              type="primary"
              htmlType="submit">
              Sign in
            </Button>
            <p>
              <span className="margin-right">
                Username
                ：guest
              </span>
              <span>
                Password
                ：guest
              </span>
            </p>
          </Row>
        </Form>
      </div>
    )
  }
}