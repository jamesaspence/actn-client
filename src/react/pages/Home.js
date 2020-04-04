import React from 'react';
import './Home.scss';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';

const Home = () => (
  <ContentLayout className="Home">
    <PageHeader>Home</PageHeader>
    <p>WIP - please check back again soon!</p>
    <p>For now, please feel free to record your prices - the price data is currently being stored and will be displayed once we finish development on this page.</p>
    <Link to="/price" className="Home__link button is-link">Record Price</Link>
  </ContentLayout>
);

export default Home;