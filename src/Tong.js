import React from "react";

class Tong extends React.Component {
  tinhtong = () =>
    parseInt(this.props.a) + parseInt(this.props.b);

  render() {
    return (
      <div className="tong">
        Tổng = {this.tinhtong()}
      </div>
    );
  }
}

export default Tong;