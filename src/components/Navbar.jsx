import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import iconPng from '../images/cryptocurrency.png';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link to="/">Home</Link>,
    'link1',
    <HomeOutlined />,
  ),
  getItem(
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    'link2',
    <FundOutlined />,
  ),
  getItem(
    <Link to="/exchanges">Exchanges</Link>,
    'link3',
    <MoneyCollectOutlined />,
  ),
  getItem(
    <Link to="/news">News</Link>,
    'link4',
    <BulbOutlined />,
  ),
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={iconPng} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" items={items} />
      )}
    </div>
  );
};

export default Navbar;
