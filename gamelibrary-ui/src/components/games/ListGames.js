import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

const ListGames =() => {
  return (
    <Layout>
      <Content
        style={{margin: '24px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
        list of Game
      </Content>
    </Layout>
  );
}

export default ListGames;