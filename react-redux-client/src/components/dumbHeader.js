import React, {Component} from "react";
import logo from "./logo.jpg"
import "./css/dumbHeader.css"

class DumbHeader extends Component {

  render() {
    return (
        <div className="Logo">

          <img src={logo} alt="el-logo"></img>
        </div>
    )
  }
}

export default DumbHeader;
