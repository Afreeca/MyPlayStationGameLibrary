import React from 'react';
import EditableTable from 'components/common/Table';
import { Layout } from 'antd';
import { GetGames } from 'utils/api';
import { addKeyToObjectArray } from 'utils/helper';


const { Content } = Layout;


const ListGames = () => {
  const response = GetGames();
  
  return (
    <Layout>
      <Content style={{margin: '24px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
         {response && <EditableTable data={addKeyToObjectArray(response.data)} /> }
      </Content>
    </Layout>
  );
}

export default ListGames;