import React from "react";
import { items } from "./SidebarItemsMenu";
import { Avatar, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 256,
          height: "100vh",
          // position: "fixed",
          justifyContent: "center",
          background: "green",
        }}
        className={"sider-wrapper"}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ backgroundColor: "gray" }}
        />

        <Menu
          mode={"inline"}
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
          }}
          ref={this.menuRef}
          onClick={this.handleNavigate}
          className="menu-wrapper"
          id="menu-wrapper"
          theme={"light"}
        >
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
