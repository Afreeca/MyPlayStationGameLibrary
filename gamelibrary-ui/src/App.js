import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from 'components/common/Sidebar';
import ListGames from 'components/games/ListGames';
import Home from 'Home';

const App = () => {
    return (
    <Router>
      <Layout className='App' style={{display: 'flex'}}>
          <Sidebar />
          <Switch>
            <Route path='/'  exact component={Home} />
            <Route path='/gameLibrary' component={ListGames} />
          </Switch>
      </Layout>
    </Router>
    );
  }

export default App;