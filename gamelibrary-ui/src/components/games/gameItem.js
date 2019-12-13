import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { username, name } = this.props.player;
    const itemName = username || name;

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>,
    );
  }
}