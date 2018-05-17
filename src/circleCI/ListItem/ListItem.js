import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './ListItem.css'

class ListItem extends Component {
  getPath = () => {
    return "/details/" + this.props.build.buildNum;
  }
  calculateAgo = () => {
    var d = new Date();
    var n = d.getTime();
    console.log(this.props.build.stopTime)
  }
  statusClassName = () => {
    if(this.props.build.status == "success") {
      return "greenStatus"
    } else if (this.props.build.status == "failed") {
      return "redStatus"
    } else if (this.props.build.status == "fixed") {
      return "yellowStatus"
    } else {
      return "blackStatus"
    }
  }
  getTimeIcon = () => {
    return require("./time.png");
  }
  render() {
   return (
     <NavLink
      to={this.getPath()}
      className="navLink"
    >
     <div
      className="item"
     >
      <div
        className="statusHolder">
        <div
          className={`itemStatus ${this.statusClassName()}`}>
          <div className="statusText">
            {this.props.build.status}
          </div>
        </div>
      </div>
      <div className="branchHolder">
        <div className="itemBranch">{this.props.build.branch}</div>
        <div
          className="itemMessage"
        >
          {this.props.build.message}
        </div>
      </div>
      <div className="timeHolder">
        <div
          className="itemTime"
        >
        <img
          src={this.getTimeIcon()}
          className="timeIcon"
        />
            <div
              className="timeText"
            >
              {this.props.build.stopTime}
            </div>
        </div>
      </div>
    </div>
    </NavLink>
   )
 }
}
export default ListItem;
