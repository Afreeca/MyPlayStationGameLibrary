import React from 'react';

import { Layout, Icon } from 'antd';

const Header =({collapsed, toggleSideBar}) => {

  return (
    <Layout.Header style={{ background: '#f0f2f5', padding: 0 }}>
        <Icon
        className="trigger"
        type={collapsed ? 'caret-right' : 'caret-left'}
        onClick={toggleSideBar}
        />
    </Layout.Header>
  );
}

export default Header;