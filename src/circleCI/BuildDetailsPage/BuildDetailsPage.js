import React, {Component} from 'react';
import './BuildDetailsPage.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBuild } from '../reducers/BuildDetailsReducer/actions.js';

class BuildDetailsPage extends Component {

  getSubheader = () => {
    return "Build no #" + this.props.match.params.num;
  }

  render() {
    return (
      <div>
        <HeaderComponent subheader={this.getSubheader()} />
        {
          this.props.fetchBuild(this.props.match.params.num)
        }
        <div className="detailItem">
          <div className="container">
            Branch name:
          </div>
          <div className="container">
            {this.props.build.branch}
          </div>
        </div>
        <div className="detailItem">
          <div className="container">
            Status:
          </div>
          <div className="container">
            {this.props.build.status}
          </div>
        </div>
        <div className="detailItem">
          <div className="container">
            Commit Message:
          </div>
          <div className="container">
            {this.props.build.message}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    build: state.buildDetails.build,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBuild: fetchBuild,
  }, dispatch)
}

BuildDetailsPage = connect(mapStateToProps, mapDispatchToProps)(BuildDetailsPage)

export default BuildDetailsPage;
