import React from 'react';
import './TopTenPrices.scss';

const TopTenPrices = ({ currentDate, currentTime }) => (
  <div className="TopTenPrices">
    <h2 className="subtitle">Top Ten</h2>
    <p>The top ten prices for the {currentTime} of {currentDate} are:</p>
  </div>
);

export default TopTenPrices;