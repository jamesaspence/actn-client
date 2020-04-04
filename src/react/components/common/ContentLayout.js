import React from 'react';
import './ContentLayout.scss';

const ContentLayout = ({ children, className='' }) => (
  <div className={`ContentLayout ${className}`}>
    <div className="section">
      <div className="container">
        { children }
      </div>
    </div>
  </div>
);

export default ContentLayout;