import React from 'react';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';
import RegisterContainer from '../components/register/RegisterContainer';

const Register = () => (
  <ContentLayout className="Register">
    <PageHeader>Register</PageHeader>
    <RegisterContainer/>
  </ContentLayout>
);

export default Register;