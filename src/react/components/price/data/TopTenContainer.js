import React, { useEffect, useState } from 'react';
import TopTenPrices from './TopTenPrices';
import Subheader from '../../common/Subheader';
import { formatDate, getTimeOfDay } from '../../../../service/date';
import { fetchTopTenPrices } from '../../../../api/data';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopTen } from '../../../../redux/actions/prices';
import { STATUSES } from '../../../../redux/actions';

const TopTenContainer = () => {
  const [ dataRetrieved, setRetrieved ] = useState(false);
  const dispatch = useDispatch();

  const selectTopTenStatus = state => state.prices.topTen.status;
  const selectTopTenPrices = state => state.prices.topTen.data;

  const topTenStatus = useSelector(selectTopTenStatus);
  const prices = useSelector(selectTopTenPrices);

  useEffect(() => {
    if (dataRetrieved) {
      return;
    }

    dispatch(fetchTopTen(STATUSES.LOADING));
    fetchTopTenPrices()
      .then(data => {
        setRetrieved(true);
        dispatch(fetchTopTen(STATUSES.SUCCESS, data));
      }).catch(() => {
      setRetrieved(true);
        dispatch(fetchTopTen(STATUSES.FAILURE));
      });
  }, [ dataRetrieved, setRetrieved, dispatch ]);

  const date = new Date();
  const currentDate = formatDate(date);
  const currentTime = getTimeOfDay(date);

  return (
    <div className="TopTenContainer">
      <Subheader>Top Ten</Subheader>
      <TopTenPrices
        currentDate={currentDate}
        currentTime={currentTime}
        status={topTenStatus}
        prices={prices}
      />
    </div>
  );
};

export default TopTenContainer;