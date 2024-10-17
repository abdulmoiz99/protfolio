import { Divider, Layout, Card, Button, Input, Alert } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

const { Content } = Layout;

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const authenticateUser = async () => {
    setError(false);
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username,
        password,
      });
      if (response.status === 201) {
        console.log('Login successful:', response.data);
        // Handle successful login (e.g., store token or user data)
      }
    } catch (err) {
      setError(true)
      setErrorMessage("Invalid username or password");
      console.error('Login error:', err);
    }
  }

  return (
    <Content className="content">
      <Card title="Sign In" bordered={false} className="card">
        {error && <Alert className="alert" message={errorMessage} type="error" />}
        <Input
          size="large"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          prefix={<UserOutlined />}
          className="input"
        />
        <Input.Password
          prefix={<KeyOutlined />}
          size="large"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="input"
        />
        <Button type="primary" block className="primary-button" onClick={authenticateUser}> Login </Button>
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
