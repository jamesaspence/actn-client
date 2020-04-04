import React from 'react';
import './Header.scss';
import logo from '../../../resources/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../../redux/actions';
import { postLogout } from '../../../api/auth';
import { clearAccessToken } from '../../../localStorage';
import { logout } from '../../../redux/actions/auth';
import { push } from 'connected-react-router';

const renderButtons = (userStatus, dispatch) => {
  const onLogoutClick = () => {
    postLogout();
    clearAccessToken();
    dispatch(push('/'));
    dispatch(logout());
  };

  if (userStatus == null || [STATUSES.LOADING].includes(userStatus)) {
    return <Link to="/" disabled className="Link button is-dark is-loading" />;
  }

  if (userStatus === STATUSES.SUCCESS) {
    return (
      <>
        <Link to="/price" className="Link button is-dark">Record Price</Link>
        <div className="Link button is-dark" onClick={onLogoutClick}>Logout</div>
      </>
    );
  }

  return (
    <>
      <Link to="/login" className="Link button is-dark">Login</Link>
      <Link to="/register" className="Link button is-dark">Sign Up</Link>
    </>
  );
};

const Header = () => {
  const dispatch = useDispatch();

  const selectUserStatus = state => state.auth.status;
  const userStatus = useSelector(selectUserStatus);

  return (
    <header className="Header">
      <div className="Header__left">
        <Link to="/" className="Link--with-logo">
          <img src={logo} alt="ACTN logo" className="Header__logo"/>
        </Link>
      </div>
      <div className="Header__right">
        { renderButtons(userStatus, dispatch) }
      </div>
    </header>
  );
};

export default Header;
