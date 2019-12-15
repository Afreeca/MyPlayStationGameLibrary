import React from 'react';
import { formatMomentDate } from 'helper/utils';
import { Card } from 'antd';

const GameItem = ({game}) => {
  return (
      <Card
      hoverable
        style={{ width: 350 }}
        cover={<img alt="example" src={game.boxArtUrl} />}
        bodyStyle={{width:'250'}}
      >
      <div style={{marginBottom:10}}>
        <span style={{fontWeight:'bold'}}>Platform</span>
        <span style={{ margin:10}}>{game.platform}</span>
      </div>
      <div style={{marginBottom:10}}>
        <span style={{fontWeight:'bold'}}>Genre</span>
        <span style={{margin:10}}>{game.genre}</span>
      </div>
      <div style={{marginBottom:10}}>
        <span style={{fontWeight:'bold'}}>Release Date</span>
        <span style={{margin:10}}>{formatMomentDate(game.releaseDate)}</span>
      </div>
      <div style={{marginBottom:10}}>
        <span style={{fontWeight:'bold'}}>N° Of Players</span>
        <span style={{margin:10}}>{game.nrPlayers}</span>
      </div>
      <div style={{marginBottom:10}}>
        <span style={{fontWeight:'bold'}}>Publisher</span>
        <span style={{margin:10}}>{game.publisher}</span>
      </div>
    </Card>
  );
}

export default GameItem;