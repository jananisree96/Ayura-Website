import React from 'react';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import OverView from './Overview';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 2px;
`;

const Dashboard = () => {
  return (
    <Layout>
      <Sidebar />
      <ContentWrapper>
        <AppHeader />
        <OverView />
      </ContentWrapper>
    </Layout>
  );
};

export default Dashboard;
