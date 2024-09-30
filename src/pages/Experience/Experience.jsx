import React from "react";
import CardContent from "../../component/cardContent/CardContent";
import "./Experience.css";
import { List } from "antd";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardContent title="Experience">
        <List>
          <List.Item>
            <List.Item.Meta
              title="IT Infrastructure"
              description="PT Berlian Sistem Informasi (February - July 2024)"
            />
          </List.Item>
          <List.Item>
            <ul>
              <li>
              Implemented and managed patch management for 500+ endpoints using Microsoft SCCM. 
              </li>
              <li>
              Administered endpoint security using Trellix and Forti EMS, ensuring robust protection against threats.
              </li>
              <li>
              Conducted vulnerability analysis for Windows desktops and servers to enhance system security
              </li>
              <li>
              Managed Active Directory and Microsoft 365 environments, ensuring seamless user access and security
              </li>
              <li>
              Executed daily operational tasks in Microsoft Azure cloud platform, optimizing performance and reliability, including troubleshooting and ensuring the reliability of Azure backup solutions
              </li>
              <li>Analyzed alerts and monitored system performance using the ELK stack (Elasticsearch, Logstash, Kibana), achieving less than 30-minute analysis and under 2-hour remediation times for critical issues
              </li>
              <li>
              Conducted comprehensive vulnerability assessments using Nessus, Burp Suite, and ImmuniWeb, ensuring proactive security measures
              </li>
              <li>
              Handled daily network operations using WLC (Wireless LAN Controller), ensuring smooth connectivity and performance.
              </li>
              <li>
              Conduct proof-of-concept (POC) initiatives for Aruba networking solutions, evaluating feasibility and effectiveness.
              </li>
              <li>
              Managed SASE (Secure Access Service Edge) implementations, including SD-WAN using FortiGate, enhancing network security and performance
              </li>
            </ul>
          </List.Item>
        </List>
      </CardContent>
    );
  }
}

export default Experience;
