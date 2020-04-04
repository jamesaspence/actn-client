import React from 'react';
import './FormSelect.scss';

const FormSelect = ({
  name,
  label,
  children,
  onChange,
  defaultValue = '',
  defaultValueText = '',
  value = '',
  error = false,
  errorMessage = null,
  disabled = false
}) => {

  const onInputChange = event => {
    const val = event.target.value;
    onChange(name, val);
  };

  return (
    <div className="FormSelect field">
      <label htmlFor={name} className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select name={name} disabled={disabled} id={name} value={value} onChange={onInputChange}>
            <option disabled value={defaultValue}>{defaultValueText}</option>
            {children}
          </select>
        </div>
      </div>
      {
        error && errorMessage != null &&
        <p className="help is-danger">{errorMessage}</p>
      }
    </div>
  );
};

export default FormSelect;