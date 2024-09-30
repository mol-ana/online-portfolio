import { Card } from "antd";
import React from "react";

class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card title={this.props.title} style={{ width: 800 }}>
          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default CardContent;
