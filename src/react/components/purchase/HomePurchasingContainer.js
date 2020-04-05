import React from 'react';
import { useSelector } from 'react-redux';
import selectLoggedIn from '../../../redux/selectors/auth/selectLoggedIn';
import HomePurchasingMessage from './HomePurchasingMessage';
import Purchases from './Purchases';

const renderLoggedInComponents = purchases => {
  return (
    <>
      <Purchases purchases={purchases}/>
    </>
  )
};

const HomePurchasingContainer = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  const purchases = [
    {
      price: 58,
      quantity: 300
    },
    {
      price: 61,
      quantity: 300
    },
    {
      price: 151,
      quantity: 300
    },
    {
      price: 152,
      quantity: 300
    },
    {
      price: 12,
      quantity: 300
    },
  ];
  //TODO check if logged in
  //TODO if not, load "It's turnip day, login to record purchases."
  //TODO load week's purchases
  //TODO render form allowing purchasing of additional turnips
  return (
    <div className="HomePurchasingContainer">
      <HomePurchasingMessage
        message={
          isLoggedIn ?
          'Record your purchases today to track profits throughout the week!' :
          'Login to record your purchased turnips, then keep track of your profits!'
        } />
      {
        isLoggedIn &&
        renderLoggedInComponents(purchases)
      }
    </div>
  )
};

export default HomePurchasingContainer;