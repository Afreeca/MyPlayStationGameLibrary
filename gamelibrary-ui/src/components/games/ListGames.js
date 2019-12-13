import React from 'react';
import _ from 'lodash';
import Table from 'components/common/Table';
import { Layout } from 'antd';
import { FechData } from 'utils/api';
import { addKeyToObjectArray } from 'utils/helper';

const { Content } = Layout;
const SERVICE_URL = process.env.REACT_APP_API_URL;

const removeGame = (name) => {
  console.log('remove game',name);
}

const addGame = (name) => {
  console.log('add game: ', name);
}

const ListGames =() => {
  const response = FechData(`${SERVICE_URL}/api/games`);
  
  return (
    <Layout>
      <Content style={{margin: '24px 16px', padding: 24,backgroundColor:  '#e0e4eb' }}>
         {response 
          && 
          <Table games={addKeyToObjectArray(response.data)} addGame={addGame} removeData={removeGame}/>
         }
      </Content>
    </Layout>
  );
}

export default ListGames;