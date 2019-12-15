import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Sidebar extends Component {
  render() {
    return (
      <Layout.Sider trigger={null}>
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
          <SubMenu
            key="sub1"
            title={
              <span className='menu-item'>
                 <Icon type='appstore' />
                 Game Library
              </span>
              }
            >
            <Menu.Item key="2">
              <Link to='/gameLibrary'>
                <Icon type='database' />
                <span className='menu-item'>List Games</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/newGame'>
                <Icon type='plus-square' />
                <span className='menu-item'>Add Game</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sidebar;