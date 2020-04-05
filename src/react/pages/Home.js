import React from 'react';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';
import HomePurchasingContainer from '../components/purchase/HomePurchasingContainer';
import TopTenContainer from '../components/price/data/TopTenContainer';

const Home = () => {
  const today = new Date();
  const isSunday = today.getDay() === 0;

  return (
    <ContentLayout className="Home">
      <PageHeader>Home</PageHeader>
      <p>WIP - please check back again soon!</p>
      <p>For now, please feel free to record your prices - the price data is currently being stored and will be displayed once we finish development on this page.</p>
      {
        isSunday ?
        <HomePurchasingContainer /> :
        <TopTenContainer />
      }
    </ContentLayout>
  );
};

export default Home;