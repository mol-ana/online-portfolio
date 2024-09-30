import React from "react";
import Title from "../../component/pages/container/Title/Title";
import SubTitle from "../../component/pages/container/Title/SubTitle";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Title title={"Maulana P. R."} />
        <SubTitle className="sub-title-home" subTitle="IT Security" />
        <div className="link-wrapper">
          <Link to={"https://https://github.com/mol-ana/"} target="_blank">
            <GithubFilled style={{ color: "black", fontSize: 30 }} />
          </Link>
          <Link to={"https://www.linkedin.com/in/maulana-pramisya-ramadhan/"} target="_blank">
            <LinkedinFilled style={{ color: "black", fontSize: 30 }} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
