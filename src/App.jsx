import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, BrowserRouter, Route } from 'react-router-dom'

import Todo1 from './components/Todo1'
import Todo2 from './components/Todo2'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1"><Link className="list-group-item" to="/todo1">to do list</Link></Menu.Item>
                  <Menu.Item key="2"><Link className="list-group-item" to="/todo2">to do list2</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Row>
                <Col span={24}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Content className="site-layout-background" style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}>
                    <Route path="/todo1" component={Todo1}></Route>
                    <Route path="/todo2" component={Todo2}></Route>
                  </Content>
                </Col>
              </Row>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
