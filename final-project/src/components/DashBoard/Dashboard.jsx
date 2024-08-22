import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import OverView from "./Overview";
import CustomerTable from "./CustomerTable";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

const SidebarWrapper = styled.div`
  width: 250px; 
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("overview");

  const renderContent = () => {
    switch (selectedComponent) {
      case "overview":
        return <OverView />;
      case "customers":
        return <CustomerTable />;
      default:
        return <OverView />;
    }
  };

  return (
    <Layout>
      <AppHeader />
      <MainWrapper>
        <SidebarWrapper>
          <Sidebar onSelect={setSelectedComponent} />
        </SidebarWrapper>
        <ContentWrapper>
          {renderContent()}
        </ContentWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default Dashboard;
