import { useState , useEffect } from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import styles from './index.less';
import { UserOutlined, LockOutlined  } from '@ant-design/icons';
import LoginQrcode from './loginQrcode';
// import logo from '../../assets/logo_blue_1024.png';
import imgUrl from '@/assets/qrcode_for_wechat.png';
// 
const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  useEffect(() => {
    forceUpdate({});
  }, []);

  const qrcodeClick = () => {
    Modal.info({
      title: '关注公众号即可获取登录密码',
      content: (
        <div>
          <br />
          <div style={{ textAlign: 'center' }}>
            <img src={imgUrl} alt="公众号" width={120} />
          </div>
          <p style={{ textAlign: 'center' }}>关注有福利</p>
        </div>
      ),
      onOk() {},
      okText: '知道了',
    });
  }
  return (
    <div className={styles.login_form}>
      <LoginQrcode onClick={qrcodeClick}/>
      <Form form={form} name="userForm" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm;
