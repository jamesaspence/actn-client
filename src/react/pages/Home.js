import React from 'react';
import './Home.scss';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';

const Home = () => (
  <ContentLayout className="Home">
    <PageHeader>Home</PageHeader>
    <p>WIP - please check back again soon!</p>
    <p>For now, please feel free to record your prices - the price data is currently being stored and will be displayed once we finish development on this page.</p>
  </ContentLayout>
);

export default Home;