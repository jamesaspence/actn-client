import React from 'react';
import FormInput from '../form/FormInput';
import FormButton from '../form/FormButton';

const RegisterForm = ({ onSubmit, loading, inputValues, errors, onInputChange }) => {

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
        name="username"
        label="Username"
        error={errors.hasOwnProperty('username')}
        errorMessage={errors.username}
        value={inputValues.username}
        disabled={loading}
        onChange={onInputChange} />
      <FormInput
        name="password"
        label="Password"
        error={errors.hasOwnProperty('password')}
        errorMessage={errors.password}
        value={inputValues.password}
        type="password"
        disabled={loading}
        autoComplete="new-password"
        onChange={onInputChange} />
      <FormInput
        name="passwordConfirmation"
        label="Confirm Password"
        error={errors.hasOwnProperty('passwordConfirmation')}
        errorMessage={errors.passwordConfirmation}
        value={inputValues.passwordConfirmation}
        type="password"
        disabled={loading}
        autoComplete="new-password"
        onChange={onInputChange} />
      <FormButton type="submit" loading={loading} disabled={loading}>Submit</FormButton>
    </form>
  );
};

export default RegisterForm;