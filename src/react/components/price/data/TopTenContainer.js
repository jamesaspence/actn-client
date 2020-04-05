import React, { useEffect, useState } from 'react';
import TopTenPrices from './TopTenPrices';
import { formatDate } from '../../../../service/date';
import { fetchTopTenPrices } from '../../../../api/data';
import { useDispatch } from 'react-redux';
import { fetchTopTen } from '../../../../redux/actions/prices';
import { STATUSES } from '../../../../redux/actions';

const TopTenContainer = () => {
  const date = new Date();
  const currentDate = formatDate(date);
  const currentTime = (date.getHours() > 10 && date.getMinutes() > 4) || date.getHours() >= 12 ? 'evening' : 'morning';

  const [ dataRetrieved, setRetrieved ] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataRetrieved) {
      return;
    }

    dispatch(fetchTopTen(STATUSES.LOADING));
    fetchTopTenPrices()
      .then(data => {
        setRetrieved(true);
        dispatch(fetchTopTen(STATUSES.SUCCESS, data.data));
      }).catch(() => {
      setRetrieved(true);
        dispatch(fetchTopTen(STATUSES.FAILURE));
      });
  }, [ dataRetrieved, setRetrieved, dispatch ]);

  return (
    <TopTenPrices
      currentDate={currentDate}
      currentTime={currentTime}
    />
  );
};

export default TopTenContainer;