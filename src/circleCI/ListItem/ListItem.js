import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './ListItem.css'
import { restartBuild, cancelBuild } from '../reducers/BuildItemReducer/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

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
  getRestartIcon = () => {
    return require("./restart.png");
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.restartBuild(this.props.build)
  }

  cancelBuild = (event) => {
    event.preventDefault();
    console.log("aa");
    this.props.cancelBuild(this.props.build)
  }
  checkNum = () => {
    if(this.props.buildNum == this.props.build.buildNum){
      return (<button className="restartBtn" onClick={this.cancelBuild}>
        Cancel
      </button>)
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
              <Moment fromNow>{this.props.build.stopTime}</Moment>
            </div>

        <button
          onClick={this.handleClick}
          className="restartBtn"
        >
        <img
          src={this.getRestartIcon()}
          className="timeIcon"
        />
          <div>Restart Build</div>
        </button>

        <div>

            { this.props.restarting  ?
              this.checkNum()
             : "" }
        </div>
        </div>
      </div>
    </div>
    </NavLink>
   )
 }
}

function mapStateToProps(state) {
  return {
    restarted: state.buildItem.restarted,
    restarting: state.buildItem.restarting,
    buildNum: state.buildItem.buildNum
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    restartBuild: restartBuild,
    cancelBuild: cancelBuild
  }, dispatch)
}

ListItem = connect(mapStateToProps, mapDispatchToProps)(ListItem)


export default ListItem;
