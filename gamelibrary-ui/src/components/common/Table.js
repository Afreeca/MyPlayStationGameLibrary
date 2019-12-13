import React from 'react';
import { Table, Popconfirm, Avatar, Button } from 'antd';
import { formatMomentDate } from 'utils/helper';

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
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
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <Button>Delete</Button>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      dataSource: [],
      count: 2,
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.props.data,
      count: this.props.data.length
    })
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  render() {
    return (
      <div>
        <Table
          title={() => <span className='tableHeader'>Current Games</span>}
          dataSource={this.state.dataSource}
          columns={this.columns}
          scroll={{ y: 240, x: 1200 }}
        />
      </div>
    );
  }
}

export default EditableTable;