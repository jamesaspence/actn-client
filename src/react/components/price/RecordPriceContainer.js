import React, { useState } from 'react';
import RecordPrice from './RecordPrice';
import { recordPrice } from '../../../api/price';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { STATUSES } from '../../../redux/actions';
import { formatDate, getTimeOfDay, isSunday, subtractDay } from '../../../service/date';

const generateInitialValues = () => {
  let date = new Date();
  if (isSunday(date)) {
    date = subtractDay(date);
  }

  return {
    date: formatDate(date),
    time: getTimeOfDay(date)
  };
};

const RecordPriceContainer = () => {
  const [ inputValues, setInputValues ] = useState(generateInitialValues());
  const [ status, setStatus ] = useState(null);
  const [ errors, setValidationErrors ] = useState({});
  const dispatch = useDispatch();

  const onInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();

    setStatus(STATUSES.LOADING);
    recordPrice(inputValues.date, inputValues.price, inputValues.time)
      .then(() => dispatch(push('/')))
      .catch(error => {
        setStatus(null);
        setValidationErrors({
          date: 'An unexpected error occurred. Please check your input values and try again.'
        });
        console.error(error);
      });
  };

  return (
    <RecordPrice
      onSubmit={onFormSubmit}
      onInputChange={onInputChange}
      inputValues={inputValues}
      errors={errors}
      loading={status === STATUSES.LOADING}
      />
  );
};

export default RecordPriceContainer;