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
  disabled = false
}) => {

  const onInputChange = dateString => {
    onChange(name, dateString);
  };

  return (
    <div className="field">
      <label htmlFor={name} className="label">{label}</label>
      <div className="control">
        <DayPickerInput
          disabled={true}
          onDayChange={date => onInputChange(formatDate(date))}
          inputProps={{
            id: name,
            className: 'input'
          }}
        />
      </div>
      {
        error && errorMessage != null &&
        <p className="help is-danger">{errorMessage}</p>
      }
    </div>
    // <div className="field">
    //   <label htmlFor="time" className="label">{label}</label>
    //   <div className="control">
    //     <div className="select">
    //       <select name="time" disabled={disabled} id="time" value={value} onChange={onInputChange}>
    //         <option disabled value={defaultValue}>{defaultValueText}</option>
    //         {children}
    //       </select>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FormDate;