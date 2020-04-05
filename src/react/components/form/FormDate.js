import React from 'react';
import './FormDate.scss';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate } from '../../../service/date';

const FormDate = ({
  name,
  label,
  error = false,
  errorMessage = null,
  value,
  onChange,
  disabledDays = () => true
}) => {

  const onInputChange = dateString => {
    onChange(name, dateString);
  };

  return (
    <div className="field">
      <label htmlFor={name} className="label">{label}</label>
      <div className="control">
        <DayPickerInput
          onDayChange={date => onInputChange(formatDate(date))}
          formatDate={formatDate}
          placeholder="YYYY-MM-DD"
          inputProps={{
            id: name,
            className: `input ${error ? 'is-danger' : ''}`
          }}
          value={value}
          dayPickerProps={{
            disabledDays
          }}
        />
      </div>
      {
        error && errorMessage != null &&
        <p className="help is-danger">{errorMessage}</p>
      }
    </div>
  );
};

export default FormDate;