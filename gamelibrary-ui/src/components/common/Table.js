import React from 'react';
import { Table as AntTable, Avatar, Button } from 'antd';
import { formatMomentDate } from 'utils/helper';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name',  width: 150, fixed: 'left', },
  { title: 'Platform', dataIndex: 'platform', key: 'platform', width: 150, },
  { title: 'Genre', dataIndex: 'genre', key: 'genre', width: 150, },
  { title: 'Release Date', dataIndex: 'releaseDate', key: 'releaseDate', width: 150, 
render: (text, game) =>  <span>{formatMomentDate(game.releaseDate)}</span>
  },
  { title: 'No. of Players', dataIndex: 'nrPlayers', key: 'nrPlayers', width: 150, },
  { title: 'Publisher', dataIndex: 'publisher', key: 'publisher', width: 150, },
  { title: 'boxArt', dataIndex: 'boxArtUrl', key: 'boxArtUrl', width: 250, 
    render: (text, game) =>  <Avatar src= {game.boxArtUrl} shape="square" size={64}/>
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    fixed: 'right',
    render: (ext, game) => <Button onClick={() => console.log('merda')}>remove</Button>,
  }
];

const Table = ({games, addGame, removeData}) => {    
    return (
        <AntTable
            title={() => <span className='tableHeader'>Current Games</span>}
            columns={columns}
            dataSource={games}
            scroll={{ y: 240, x: 1000 }}
        />
    );
}

export default Table;