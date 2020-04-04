import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from './RegisterForm';
import { attemptRegister } from '../../../api/auth';
import { STATUSES } from '../../../redux/actions';
import { push } from 'connected-react-router';
import { setAccessToken, encodeToken } from '../../../localStorage';
import { loginSuccess } from '../../../redux/actions/auth';

const expectedInputs = ['email', 'username', 'password', 'passwordConfirmation'];

const validateForm = inputValues => {
  const errors = expectedInputs.reduce((errors, expected) => {
    if (!inputValues.hasOwnProperty(expected) || typeof inputValues[expected] !== 'string' || inputValues[expected].length < 1) {
      errors[expected] = 'This field is required.';
    }

    return errors;
  }, {});

  if (!errors.hasOwnProperty('password')) {
    const { password, passwordConfirmation } = inputValues;

    if (password !== passwordConfirmation) {
      errors['password'] = 'The password and password confirmation do not match.';
    }
  }

  return errors;
};

//TODO consolidate w/ LoginContainer
const RegisterContainer = () => {
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

    const { email, username, password, passwordConfirmation } = inputValues;
    setStatus(STATUSES.LOADING);
    attemptRegister(email, username, password, passwordConfirmation)
      .then(data => {
        setStatus(STATUSES.SUCCESS);
        setInputValues({});
        const encodedToken = encodeToken(data.user.id, data.token);
        setAccessToken(encodedToken);
        dispatch(loginSuccess(encodedToken, data.user));
        dispatch(push('/'));
      }).catch(() => {
        setStatus(STATUSES.FAILURE);
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
    <RegisterForm onSubmit={onFormSubmit} inputValues={inputValues} onInputChange={onInputChange} errors={errors} loading={status === STATUSES.LOADING} />
  );
};

export default RegisterContainer;