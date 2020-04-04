import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { attemptLogin } from '../../../api/auth';
import { STATUSES } from '../../../redux/actions';
import { push } from 'connected-react-router';
import { setAccessToken } from '../../../localStorage';
import { loginSuccess } from '../../../redux/actions/auth';

const expectedInputs = ['email', 'password'];

const validateForm = inputValues => {
  return expectedInputs.reduce((errors, expected) => {
    if (!inputValues.hasOwnProperty(expected) || typeof inputValues[expected] !== 'string' || inputValues[expected].length < 1) {
      errors[expected] = 'This field is required.';
    }

    return errors;
  }, {});
};

const LoginContainer = () => {
  const [ status, setStatus ] = useState(null);
  const [ inputValues, setInputValues ] = useState({});
  const [ errors, setValidationErrors ] = useState({});
  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    setValidationErrors({});
    const validationErrors = validateForm(inputValues);

    if (Object.keys(validationErrors).length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    const { email, password } = inputValues;
    setStatus(STATUSES.LOADING);
    attemptLogin(email, password)
      .then(data => {
        setStatus(STATUSES.SUCCESS);
        setInputValues({});
        setAccessToken(data.token);
        dispatch(loginSuccess(data.token, data.user));
        dispatch(push('/'));
      }).catch(error => {
        setStatus(STATUSES.FAILURE);
        if (!error.hasOwnProperty('response')) {
          setValidationErrors({
            email: 'An unexpected error occurred. Please try again later.'
          });
          return;
        }

        const { response } = error;
        const statusCode = response.status;
        if (statusCode === 401) {
          setValidationErrors({
            email: 'Invalid email/password.'
          });
          return;
        }

        setValidationErrors({
          email: 'An unexpected error occurred. Please try again later.'
        });
      });
  };

  const onInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  return (
    <LoginForm onSubmit={onFormSubmit} inputValues={inputValues} onInputChange={onInputChange} errors={errors} loading={status === STATUSES.LOADING} />
  );
};

export default LoginContainer;