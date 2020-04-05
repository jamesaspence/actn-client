import React from 'react';
import './FormDate.scss';
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

const FormDate = ({
  name,
  label,
  error = false,
  errorMessage = null,
  onChange,
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