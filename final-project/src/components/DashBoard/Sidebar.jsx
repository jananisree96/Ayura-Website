import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Sidebar = ({ onSelect }) => {
  return (
    <Menu
      mode="inline"
      theme="light"
      defaultSelectedKeys={["overview"]}
      style={{
        height: "100vh",
        width: "200px",
        borderRight: 0,
        cursor: "pointer",
      }}
      onClick={({ key }) => onSelect(key)}
    >
      <Menu.Item
        key="overview"
        icon={<DashboardOutlined />}
        style={{ color: "#000" }}
      >
        Overview
      </Menu.Item>
      <Menu.Item
        key="customers"
        icon={<UserOutlined />}
        style={{ color: "#000" }}
      >
        Customers
      </Menu.Item>
      <Menu.Item
        key="analytics"
        icon={<BarChartOutlined />}
        style={{ color: "#000" }}
      >
        Analytics
      </Menu.Item>
      <Menu.Item key="orders" icon={<BellOutlined />} style={{ color: "#000" }}>
        Orders
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        style={{ color: "#000" }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
