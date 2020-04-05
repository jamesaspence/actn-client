import React from 'react';
import './TopTenPrices.scss';
import { STATUSES } from '../../../../redux/actions';

const renderTable = prices => {
  if (prices.length < 1) {
    return <div className="TopTenPrices__table">
      <small className="Table__info">No data to show</small>
    </div>
  }

  return (
    <table className="table">
      <thead>
      <tr>
        <th><abbr title="Number">#</abbr></th>
        <th><abbr title="Username">Username</abbr></th>
        <th><abbr title="Price (Bells)">Price (Bells)</abbr></th>
      </tr>
      </thead>
      <tbody>
        {prices.map((price, i) => (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{price.user.username}</td>
            <td>{price.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

const TopTenPrices = ({ currentDate, currentTime, status, prices }) => {
  if (status == null || status === STATUSES.LOADING) {
    return (
      <div className="TopTenPrices">
        Loading...
      </div>
    );
  }

  return (
    <div className="TopTenPrices">
      <p>The top ten prices for the {currentTime} of {currentDate} are:</p>
      { renderTable(prices) }
    </div>
  )
};

export default TopTenPrices;