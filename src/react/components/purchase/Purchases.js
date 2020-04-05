import React from 'react';
import './Purchases.scss';
import Subheader from '../common/Subheader';

const renderTable = purchases => {
  const sum = purchases.reduce((acc, purchase) => {
    acc.quantity+= purchase.quantity;
    acc.price+= purchase.quantity * purchase.price;

    return acc;
  }, {
    quantity: 0,
    price: 0
  });

  return (
    <>
      <Subheader>Your Purchases</Subheader>
      <table className="Purchases__table table">
        <thead>
        <tr>
          <th><abbr title="Quantity">#</abbr></th>
          <th><abbr title="Price">Price (Bells)</abbr></th>
          <th><abbr title="Total">Total (Bells)</abbr></th>
        </tr>
        </thead>
        <tbody>
        {purchases.map((purchase, i) => (
          <tr key={i}>
            <th>{purchase.quantity}</th>
            <td>${purchase.price}</td>
            <td>${purchase.price * purchase.quantity}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <th>{sum.quantity}</th>
            <th>~${Math.round(sum.price / sum.quantity)}</th>
            <th>${sum.price}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const Purchases = ({ purchases }) => {
  return (
    <div className="Purchases">
      {
        purchases != null &&
        purchases.length > 0 &&
        renderTable(purchases)
      }
    </div>
  )
};

export default Purchases;