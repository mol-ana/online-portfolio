import { List } from "antd";
import React from "react";
import CardContent from "../../component/cardContent/CardContent";

class Education extends React.Component {
  render() {
    return (
      <CardContent title="Education">
        <List>
          <List.Item style={{ display: "inline-block" }}>
            <List.Item.Meta
              title="Teknologi Informasi"
              description="Universitas Sumatera Utara"
            />
            <ul>
              <li>Interest in IT Security</li>
              <li>Get Security+ certification from CompTIA</li>
            </ul>
          </List.Item>
        </List>
      </CardContent>
    );
  }
}

export default Education;
