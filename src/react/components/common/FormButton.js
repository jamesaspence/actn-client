import React from 'react';
import './FormButton.scss';

const FormButton = ({ children, loading = false, disabled = false, type = 'button', onClick = null }) => {
  return (
    <button className={`FormButton button is-dark ${loading ? 'is-loading' : ''}`} disabled={disabled} onClick={onClick} type={type}>{children}</button>
  )
};

export default FormButton;