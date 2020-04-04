import React from 'react';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  const onSubmit = values => {
    console.log('submitted', values);
  };

  return (
    <LoginForm onSubmit={onSubmit} />
  );
};

export default LoginContainer;