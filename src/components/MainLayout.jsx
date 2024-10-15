import React, { useState } from 'react';
import '../styles/MainLayout.css'
import logo from '../imagen/logo.png'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

//Deconstruccion de objetos
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
function getItem1(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [getItem('Usuarios', '1', <UserOutlined />),
getItem('Subsistemas', 'sub1', <SettingOutlined />, [
  getItem('Mecidion Area GPS', '3'),
  getItem('Frecuencia Cardíaca', '4'),
  getItem('Niveles de alcohol', '5'),
  getItem('Monitorio velocidad', '6'),
  getItem('Automatización Hogar', '7'),
])


];


export const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" >
          <img src={logo} alt="Logo-Empresa" className='logo-image' />
        </div>


        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        
      </Sider>
      <Layout>
        <Header className="main-layout-header" />
        <Content className="main-layout-content">
          <Breadcrumb className="main-layout-breadcrumb">
            <Breadcrumb.Item>Usuario</Breadcrumb.Item>
          </Breadcrumb>
          <div className="main-layout-inner-content">
            Bill is a cat.
          </div>
        </Content>
        <Footer className="main-layout-footer">
          Ant Design ©{new Date().getFullYear()} Created Daneri
        </Footer>
      </Layout>
    </Layout>
  )
}