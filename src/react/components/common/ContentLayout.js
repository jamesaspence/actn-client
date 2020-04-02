import React from 'react';
import './ContentLayout.scss';

const ContentLayout = ({ children, className='' }) => (
  <div className={`ContentLayout ${className}`}>
    { children }
  </div>
);

export default ContentLayout;