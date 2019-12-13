import React from 'react';
import EditableTable from 'components/common/Table';
import { Layout } from 'antd';
import { FechData } from 'utils/api';
import { addKeyToObjectArray } from 'utils/helper';

const { Content } = Layout;
const SERVICE_URL = process.env.REACT_APP_API_URL;

const ListGames =() => {
  const response = FechData(`${SERVICE_URL}/api/games`);
  
  return (
    <Layout>
      <Content style={{margin: '24px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
         {response && <EditableTable data={addKeyToObjectArray(response.data)} /> }
      </Content>
    </Layout>
  );
}

export default ListGames;