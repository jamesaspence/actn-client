import React, { useState } from 'react';
import RecordPrice from './RecordPrice';

const RecordPriceContainer = () => {
  const [ inputValues, setInputValues ] = useState({});

  const onInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  return (
    <RecordPrice
      onSubmit={e => console.log('done')}
      onInputChange={onInputChange}
      inputValues={inputValues}
      errors={{}}
      loading={false}
      />
  );
};

export default RecordPriceContainer;