import React from 'react';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  const onSubmit = event => {
    event.preventDefault();
    //TODO handle
    console.log('submitted.');
  };

  return (
    <LoginForm onSubmit={onSubmit} />
  );
};

export default LoginContainer;