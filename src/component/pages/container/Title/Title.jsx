import React from "react";

class Title extends React.Component {
  render() {
    const h1Style = { color: "black", fontSize: 40 };
    return <h1 style={h1Style}>{this.props.title}</h1>;
  }
}
export default Title;
