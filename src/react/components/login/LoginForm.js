import React, { useState } from 'react';
import './LoginForm.scss';
import FormInput from '../common/FormInput';
import FormButton from '../common/FormButton';

const expectedInputs = ['email', 'password'];

const validateForm = inputValues => {
  return expectedInputs.reduce((errors, expected) => {
    if (!inputValues.hasOwnProperty(expected) || typeof inputValues[expected] !== 'string' || inputValues[expected].length < 1) {
      errors[expected] = 'This field is required.';
    }

    return errors;
  }, {});
};

const LoginForm = ({ onSubmit }) => {
  const [ inputValues, setInputValues ] = useState({});
  const [ errors, setValidationErrors ] = useState({});

  const onFormSubmit = event => {
    event.preventDefault();
    setValidationErrors({});
    const validationErrors = validateForm(inputValues);

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    onSubmit(inputValues);
  };

  const onInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  return (
    <form className="LoginForm" onSubmit={onFormSubmit}>
      <FormInput
        name="email"
        label="Email Address"
        error={errors.hasOwnProperty('email')}
        errorMessage={errors.email}
        value={inputValues.email}
        autoComplete="current-password"
        onChange={onInputChange} />
      <FormInput
        name="password"
        label="Password"
        error={errors.hasOwnProperty('password')}
        errorMessage={errors.password}
        value={inputValues.password}
        type="password"
        autoComplete="current-password"
        onChange={onInputChange} />
        <FormButton type="submit">Submit</FormButton>
    </form>
  );
};

export default LoginForm;