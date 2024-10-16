import React from 'react';
import { Divider, Layout, Card, Button, Input } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import './Login.css';

const { Content } = Layout;

export default function Login() {
  return (
    <Content className="content">
      <Card title="Sign In" bordered={false} className="card">
        <Input
          size="large"
          placeholder="Username"
          prefix={<UserOutlined />}
          className="input"
        />
        <Input.Password
          prefix={<KeyOutlined />}
          size="large"
          placeholder="Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="input"
        />
        <Button type="primary" block className="primary-button">
          Login
        </Button>
        <Divider plain>or</Divider>
        <Button block className="input">
          <GoogleOutlined />
          Sign In With Google
        </Button>
        <Button block>
          <GithubOutlined />
          Sign In With Github
        </Button>
      </Card>
    </Content>
  );
}
