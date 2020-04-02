import React from 'react';
import './Header.scss';
import logo from '../../../resources/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <Link to="/" className="Header__logoLink">
      <img src={logo} alt="Turniptime logo" className="Header__logo"/>
    </Link>
  </header>
);

export default Header;
