import React from 'react';
import './Header.scss';
import logo from '../../../resources/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <div className="Header__left">
      <Link to="/" className="Link--with-logo">
        <img src={logo} alt="Turniptime logo" className="Header__logo"/>
      </Link>
    </div>
    <div className="Header__right">
      <Link to="/login" className="Link">Login</Link>
      <Link to="/register" className="Link">Sign Up</Link>
    </div>
  </header>
);

export default Header;
