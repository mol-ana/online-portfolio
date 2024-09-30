import React from "react";
import CardContent from "../../component/cardContent/CardContent";
import { Col, Row } from "antd";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardContent title="Skills">
        <Row>
          <Col span={12}>
            <ul>
              <li>React.js</li>
              <li>Boostrap</li>
              <li>IT Security</li>
              
            </ul>
          </Col>
          <Col span={12}>
            <ul>
                <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </Col>
        </Row>
      </CardContent>
    );
  }
}

export default Skills;
