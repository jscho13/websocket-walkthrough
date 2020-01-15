import React, { Component } from "react";
import ReactDOM from "react-dom";

class SocketContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div>hello</div>
    );
  }
}
export default SocketContainer;


ReactDOM.render(<SocketContainer />, document.getElementById("app"));
