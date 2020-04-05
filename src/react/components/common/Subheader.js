import React from 'react';
import './Subheader.scss';

const Subheader = ({ children }) => (
  <h2 className="Subheader subtitle">
    <span className="Subheader__inner">{ children }</span>
  </h2>
);

export default Subheader;