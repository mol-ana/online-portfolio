import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

class Container extends React.Component {
  render() {
    const layoutStyle = {
      minHeight: 120,
      color: "#fff",
      backgroundColor: "gray",
      padding: 40,
      paddingBottom: 0,
      boxSizing: "border-box",
    };
    const contentStyle = {
      color: "#fff",
      backgroundColor: "#fff",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
    };
    return (
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default Container;
