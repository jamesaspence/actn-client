import React from 'react';
import './LoginForm.scss';

const LoginForm = ({ onSubmit }) => (
  <form className="LoginForm" onSubmit={onSubmit}>
    <h2>Login form!</h2>
    <button>Click me</button>
  </form>
);

export default LoginForm;