import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from 'components/common/Sidebar';
import ListGames from 'components/games/ListGames';
import Home from 'components/screens/Home';
import store from 'config/store';

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Layout className='App' style={{display: 'flex'}}>
              <Sidebar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/gameLibrary' component={ListGames} />
              </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }

export default App;