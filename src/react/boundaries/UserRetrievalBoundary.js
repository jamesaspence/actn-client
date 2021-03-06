import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthLoading, checkAuthSuccess, checkAuthFailure } from '../../redux/actions/auth';
import { checkAuth } from '../../api/auth';
import { clearAccessToken } from '../../localStorage';

const UserRetrievalBoundary = ({ children }) => {
  const selectUserStatus = state => state.auth.status;
  const userStatus = useSelector(selectUserStatus);
  const dispatch = useDispatch();

  if (userStatus == null) {
    dispatch(checkAuthLoading());

    checkAuth()
      .then(data => {
        const { user } = data;
        dispatch(checkAuthSuccess(user));
      }).catch(() => {
        dispatch(checkAuthFailure());
        clearAccessToken();
      });
  }

  return (
    <>
      { children }
    </>
  );
};

export default UserRetrievalBoundary;