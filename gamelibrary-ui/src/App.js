import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from 'components/common/Sidebar';
import ListGames from 'components/screens/games/ListGames';
import AddGame from 'components/screens/games/AddGame';
import Home from 'components/screens/Home';

const App = () => {
  return (
    <Router>
      <Layout className='App' style={{display: 'flex'}}>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gameLibrary' component={ListGames} />
            <Route exact path='/newGame' component={AddGame} />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;