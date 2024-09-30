import React from "react";

class SubTitle extends React.Component {
  render() {
    const h2Style = { fontSize: 20 };
    return (
      <h2 style={h2Style} className={this.props.className}>
        {this.props.subTitle}
      </h2>
    );
  }
}

export default SubTitle;
