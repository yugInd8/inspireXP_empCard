import React from 'react';
import logo from '../images/Logogif.gif';
import '../components/header.css';

const Header = () => (
  <div id="header-bar">
    <h1><img id="logo" src={logo} alt="Logo" /></h1>
  </div>
);

export default Header;
