import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'main.css';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className='logo'>
          <img src='/icons/ps-icon.png' width='54px' height='54px' alt='logo'/>
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1'] }>
          <Menu.Item key='1'>
            <Link to='/'>
              <Icon type='home' />
              <span className='menu-item'>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/gameLibrary'>
              <Icon type='appstore' />
              <span className='menu-item'>Game Library</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;