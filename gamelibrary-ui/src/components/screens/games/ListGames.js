import React from 'react';
import Table from 'components/common/Table';
import { Layout, Spin} from 'antd';
import { GetGames } from 'helper/api';
import { addKeyToObjectArray } from 'helper/utils';

const { Content } = Layout;

const ListGames =() => {
  const response = GetGames('/api/games');
  
  return (
    <Layout>
      <Content style={{margin: '16px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
         {response ? <Table data={addKeyToObjectArray(response.data)}/> : <div className="spinner"><Spin /></div>}
      </Content>
    </Layout>
  );
}

export default ListGames;