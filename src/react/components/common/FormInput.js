import React from 'react';
import './FormInput.scss';

const FormInput = ({ name, label, onChange, value = '', type = 'text', placeholder = null, error = false, errorMessage = null, autoComplete = null }) => {

  const onInputChange = event => {
    const val = event.target.value;
    onChange(name, val);
  };

  return (
    <div className="field FormInput">
      <label htmlFor={name} className="label">{label}</label>
      <div className="control">
        <input type={type} className={`input ${error ? 'is-danger' : ''}`} id={name} name={name} value={value} onChange={onInputChange} autoComplete={autoComplete} placeholder={placeholder}/>
      </div>
      {
        error && errorMessage != null &&
        <p className="help is-danger">{errorMessage}</p>
      }
    </div>
  );
};

export default FormInput;