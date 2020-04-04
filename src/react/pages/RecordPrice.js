import React from 'react';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';
import RecordPriceContainer from '../components/price/RecordPriceContainer';

const RecordPrice = () => (
  <ContentLayout className="Login">
    <PageHeader>Record Price</PageHeader>
    <RecordPriceContainer/>
  </ContentLayout>
);

export default RecordPrice;