import { Divider, Layout, Card, Button, Input } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '16px 0',
  color: '#fff',
  fontSize: '20px',
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  backgroundColor: '#f0f2f5',
};

const cardStyle: React.CSSProperties = {
  width: 350,
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#001529',
  color: '#fff',
  padding: '12px 0',
};

export default function Login() {
  return (
    <Layout>
      <Header style={headerStyle}>Welcome to My App</Header>
      <Content style={contentStyle}>
        <Card title="Sign In" bordered={false} style={cardStyle}>
          <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input.Password
            prefix={<KeyOutlined />}
            size="large"
            placeholder="Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <br />
          <br />
          <Button type="primary" block>
            Login
          </Button>
          <Divider plain>or</Divider>
          <Button block>
            <GoogleOutlined />
            Sign In With Google
          </Button>
          <br />
          <br />
          <Button block>
            <GithubOutlined />
            Sign In With Github
          </Button>
        </Card>
      </Content>
      <Footer style={footerStyle}>© 2024 My App. All rights reserved.</Footer>
    </Layout>
  );
}
