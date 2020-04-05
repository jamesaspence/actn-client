import React from 'react';
import ContentLayout from '../components/common/ContentLayout';
import PageHeader from '../components/common/PageHeader';
import LoginContainer from '../components/login/LoginContainer';

const Login = () => (
  <ContentLayout className="Login">
    <PageHeader>Login</PageHeader>
    <LoginContainer/>
  </ContentLayout>
);

export default Login;