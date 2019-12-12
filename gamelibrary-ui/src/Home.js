import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Sidebar from 'components/common/Sidebar';
import Header from 'components/common/Header';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content
        style={{margin: '24px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
        Home Page
      </Content>
    </Layout>
  );
}

export default Home;