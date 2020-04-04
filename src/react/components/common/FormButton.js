import React from 'react';
import './FormButton.scss';

const FormButton = ({ children, type = 'button', onClick = null }) => {
  return (
    <button className="FormButton" onClick={onClick} type={type}>{children}</button>
  )
};

export default FormButton;