import React, { useEffect, useState } from 'react';
import { Table as AntTable, Popconfirm, Avatar, Button } from 'antd';
import { formatMomentDate } from 'utils/helper';
import { DeleteGame } from 'utils/api';


const Table = ({data}) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  const handleDelete = (record) => {
    const dataCopy = [...dataSource];
    setDataSource(dataCopy.filter(item => item.key !== record.key));

    DeleteGame(record.name)
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '12.5%',
      fixed: 'left',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      width: '12.5%',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      width: '12.5%',
    },
    {
      title: 'Release Date',
      dataIndex: 'releaseDate',
      width: '12.5%', 
      render: (text, game) => <span>{formatMomentDate(game.releaseDate)}</span>
    },
    {
      title: 'No. of Players',
      dataIndex: 'nrPlayers',
      width: '12.5%',
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
      width: '12.5%',
    },
    { 
      title: 'Box Art', 
      dataIndex: 'boxArtUrl', 
      width: '12.5%',
      render: (text, game) => <Avatar src= {game.boxArtUrl} shape="square" size={64}/>
    },
  
    {
      title: 'operation',
      dataIndex: 'operation',
      fixed: 'right',
      width: '12.5%',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
            <Button>Delete</Button>
          </Popconfirm>
        ) : null,
    },
  ];
  
 

    return (
      <div>
        <AntTable
          title={() => <span className='tableHeader'>Current Games</span>}
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 240, x: 1200 }}
        />
      </div>
    );
}

export default Table;