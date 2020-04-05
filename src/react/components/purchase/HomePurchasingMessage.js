import React from 'react';
import './HomePurchasingMessage.scss';

const HomePurchasingMessage = ({ header = `It's Sunday!`, message }) => (
  <div className="HomePurchasingMessage message is-info">
    <div className="message-header">
      <p>{header}</p>
    </div>
    <p className="message-body">
      {message}
    </p>
  </div>
);

export default HomePurchasingMessage;