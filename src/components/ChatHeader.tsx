import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ChatHeader = ({ avatar, name, onlineStatus }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0F0F13]">
      <div className="flex items-center">
        <Avatar size={40} icon={<UserOutlined />} src={avatar} />
        <div className="ml-2">
          <div className="text-white font-bold">{name}</div>
          <div className="text-[#A0A0B0]">{onlineStatus ? 'Online' : 'Offline'}</div>
        </div>
      </div>
      <Dropdown overlay={menu} trigger={['click']}
        className="text-[#A0A0B0] cursor-pointer hover:text-[#FF3366]">
        <span className="ant-dropdown-link">
          <span className="flex items-center">
            <span>...</span>
          </span>
        </span>
      </Dropdown>
    </div>
  );
};

export default ChatHeader;