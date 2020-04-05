import React from 'react';
import './Subheader.scss';

const Subheader = ({ children }) => (
  <h2 className="subtitle">{ children }</h2>
);

export default Subheader;