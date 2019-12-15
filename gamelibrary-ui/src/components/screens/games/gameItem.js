import React from 'react';
import { Card } from 'antd';

const gameItem = ({game}) => {
  return (
      <Card
        style={{ width: 240 }}
        cover={<img alt="example" src={game.boxArtUrl} />}
      >
    </Card>
  );
}

export default gameItem;