import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectLoggedIn from '../../../redux/selectors/auth/selectLoggedIn';
import HomePurchasingMessage from './HomePurchasingMessage';
import PurchaseFormContainer from './PurchaseFormContainer';
import Purchases from './Purchases';
import { fetchCurrentPurchases } from '../../../api/purchases';
import { getCurrentPurchases } from '../../../redux/actions/prices';
import { STATUSES } from '../../../redux/actions';
import selectCurrentPurchases from '../../../redux/selectors/prices/selectCurrentPurchases';

const renderLoggedInComponents = purchases => {
  return (
    <>
      <PurchaseFormContainer />
      <Purchases purchases={purchases}/>
    </>
  )
};

const HomePurchasingContainer = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const [ purchasesRetrieved, setPurchasesRetrieved ] = useState(false);

  useEffect(() => {
    if (!isLoggedIn || purchasesRetrieved) {
      return;
    }
    setPurchasesRetrieved(true);

    fetchCurrentPurchases()
      .then(data => dispatch(getCurrentPurchases(STATUSES.SUCCESS, data.data)))
      .catch(() => dispatch(getCurrentPurchases(STATUSES.FAILURE)))

  }, [ isLoggedIn, purchasesRetrieved, setPurchasesRetrieved, dispatch ]);

  const purchases = useSelector(selectCurrentPurchases);
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