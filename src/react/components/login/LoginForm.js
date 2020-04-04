import React from 'react';
import './LoginForm.scss';
import FormInput from '../common/FormInput';
import FormButton from '../common/FormButton';

const LoginForm = ({ onSubmit, loading, inputValues, errors, onInputChange }) => {

  return (
    <form className="LoginForm" onSubmit={onSubmit}>
      <FormInput
        name="email"
        label="Email Address"
        error={errors.hasOwnProperty('email')}
        errorMessage={errors.email}
        value={inputValues.email}
        disabled={loading}
        autoComplete="email"
        onChange={onInputChange} />
      <FormInput
        name="password"
        label="Password"
        error={errors.hasOwnProperty('password')}
        errorMessage={errors.password}
        value={inputValues.password}
        type="password"
        disabled={loading}
        autoComplete="current-password"
        onChange={onInputChange} />
        <FormButton type="submit" loading={loading} disabled={loading}>Submit</FormButton>
    </form>
  );
};

export default LoginForm;