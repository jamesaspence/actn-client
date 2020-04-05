import React from 'react';
import FormInput from '../form/FormInput';
import FormButton from '../form/FormButton';

const PurchaseForm = ({ onSubmit, onInputChange, errors, inputValues, loading }) => (
  <form className="PurchaseForm" onSubmit={onSubmit}>
    <FormInput
      name="price"
      label="Price"
      error={errors.hasOwnProperty('price')}
      errorMessage={errors.price}
      value={inputValues.price}
      type="number"
      disabled={loading}
      onChange={onInputChange} />
    <FormInput
      name="quantity"
      label="Quantity"
      error={errors.hasOwnProperty('quantity')}
      errorMessage={errors.quantity}
      value={inputValues.quantity}
      type="number"
      disabled={loading}
      onChange={onInputChange} />
    <FormButton type="submit" loading={loading} disabled={loading}>Submit</FormButton>
  </form>
);

export default PurchaseForm;