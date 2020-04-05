import React, { useState } from 'react';
import PurchaseForm from './PurchaseForm';
import Subheader from '../common/Subheader';
import { useDispatch } from 'react-redux';
import { STATUSES } from '../../../redux/actions';
import { postCurrentPurchase } from '../../../api/purchases';
import { addCurrentPurchase } from '../../../redux/actions/prices';

const expectedInputs = ['price', 'quantity'];

const validateForm = inputValues => {
  return expectedInputs.reduce((errors, expected) => {
    if (!inputValues.hasOwnProperty(expected) || typeof inputValues[expected] !== 'string' || inputValues[expected].length < 1) {
      errors[expected] = 'This field is required.';
    }

    return errors;
  }, {});
};

const PurchaseFormContainer = () => {
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

    const { price, quantity } = inputValues;
    setStatus(STATUSES.LOADING);
    postCurrentPurchase(price, quantity)
      .then(() => {
        setStatus(null);
        setInputValues({});
        dispatch(addCurrentPurchase(price, quantity));
      }).catch(error => {
        setStatus(STATUSES.FAILURE);

        setValidationErrors({
          price: 'An unexpected error occurred. Please try again later.'
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
    <>
      <Subheader>Record Another Purchase</Subheader>
      <PurchaseForm
        onSubmit={onFormSubmit}
        onInputChange={onInputChange}
        errors={errors}
        inputValues={inputValues}
        loading={status === STATUSES.LOADING} />
    </>
  )
};

export default PurchaseFormContainer;