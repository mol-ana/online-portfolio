import { Layout } from "antd";
import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Container from "../component/pages/container/Container/Container";

class LayoutPortfolio extends React.Component {
  render() {
    return (
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Container>
          <Outlet />
        </Container>
      </Layout>
    );
  }
}

export default LayoutPortfolio;
