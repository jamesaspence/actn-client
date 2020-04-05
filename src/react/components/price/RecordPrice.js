import React from 'react';
import FormInput from '../form/FormInput';
import FormButton from '../form/FormButton';
import FormSelect from '../form/FormSelect';
import FormDate from '../form/FormDate';

//TODO disable sundays for price input
const RecordPrice = ({ onSubmit, onInputChange, errors, inputValues, loading }) => (
  <form className="RecordPrice" onSubmit={onSubmit}>
    <FormDate
      name="date"
      label="Date"
      error={errors.hasOwnProperty('date')}
      errorMessage={errors.date}
      value={inputValues.date}
      onChange={onInputChange}
    />
    <FormInput
      name="price"
      label="Price"
      error={errors.hasOwnProperty('price')}
      errorMessage={errors.price}
      value={inputValues.price}
      type="number"
      disabled={loading}
      onChange={onInputChange} />
    <FormSelect
      name="time"
      label="Time"
      error={errors.hasOwnProperty('time')}
      errorMessage={errors.time}
      value={inputValues.time}
      disabled={loading}
      onChange={onInputChange} >
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
    </FormSelect>
    <FormButton type="submit" loading={loading} disabled={loading}>Submit</FormButton>
  </form>
);

export default RecordPrice;