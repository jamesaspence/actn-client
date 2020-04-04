import React from 'react';
import './RecordPrice.scss';
import FormInput from '../common/FormInput';
import FormButton from '../common/FormButton';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const formatDate = date => {
  const year = '' + date.getFullYear();
  let month = '' + date.getMonth();
  let day = '' + date.getDay();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
};

const RecordPrice = ({ onSubmit, onInputChange, errors, inputValues, loading }) => (
  <form className="RecordPrice" onSubmit={onSubmit}>
    <div className="field">
      <label htmlFor="date" className="label">Date</label>
      <div className="control">
        <DayPickerInput
          onDayChange={date => onInputChange('date', formatDate(date))}
          inputProps={{
            id: 'date',
            className: 'input'
          }}
        />
      </div>
    </div>
    <FormInput
      name="price"
      label="Price"
      error={errors.hasOwnProperty('price')}
      errorMessage={errors.price}
      value={inputValues.price}
      type="number"
      disabled={loading}
      onChange={onInputChange} />
    <div className="field">
      <label htmlFor="time" className="label">Time</label>
      <div className="control">
        <div className="select">
          <select name="time" id="time" defaultValue={'__disabled__'} value={inputValues.time} onChange={(event) => onInputChange('time', event.target.value)}>
            <option disabled value={'__disabled__'}> -- Select a time -- </option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>
      </div>
    </div>
    <FormButton type="submit" loading={loading} disabled={loading}>Submit</FormButton>
  </form>
);

export default RecordPrice;