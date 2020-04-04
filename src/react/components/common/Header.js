import React from 'react';
import './Header.scss';
import logo from '../../../resources/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../redux/actions';

const renderButtons = userStatus => {
  if ([STATUSES.NOT_LOADED, STATUSES.LOADING].includes(userStatus)) {
    return <Link to="/" disabled className="Link button is-dark is-loading" />;
  }

  if (userStatus === STATUSES.SUCCESS) {
    return <Link to="/price" className="Link button is-dark">Record Price</Link>;
  }

  return (
    <>
      <Link to="/login" className="Link button is-dark">Login</Link>
      <Link to="/register" className="Link button is-dark">Sign Up</Link>
    </>
  );
};

const Header = () => {
  const selectUserStatus = state => state.auth.status;
  const userStatus = useSelector(selectUserStatus);

  return (
    <header className="Header">
      <div className="Header__left">
        <Link to="/" className="Link--with-logo">
          <img src={logo} alt="Turniptime logo" className="Header__logo"/>
        </Link>
      </div>
      <div className="Header__right">
        { renderButtons(userStatus) }
      </div>
    </header>
  );
};

export default Header;
