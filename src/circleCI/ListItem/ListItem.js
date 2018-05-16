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
    }
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
      <div className="itemHeader">
        <div className="branch">
          {this.props.build.branch}
        </div>
        <div className="timeAgo">
          {this.props.build.stopTime}
        </div>
      </div>
      <div className="itemBody">
        <div className="commitMessage">
          {this.props.build.message}
        </div>
        <div className="statusSection">
            Status: <div className={this.statusClassName()}>{this.props.build.status} </div>
        </div>
      </div>
    </div>
    </NavLink>
   )
 }
}
export default ListItem;
