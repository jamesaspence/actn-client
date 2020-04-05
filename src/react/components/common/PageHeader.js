import React from 'react';
import './PageHeader.scss';

const PageHeader = ({ children }) => (
  <h1 className="PageHeader">{ children }</h1>
);

export default PageHeader;