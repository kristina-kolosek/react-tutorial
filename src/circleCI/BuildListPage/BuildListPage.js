import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ListComponent from '../ListComponent/ListComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBuilds, getBranchBuilds, getProjectBuilds } from '../reducers/BuildListReducer/actions.js';
import { fetched } from '../reducers/DropdownReducer/actions.js';
import Dropdown from '../DropdownComponent/DropdownComponent';
import './BuildListPage.css';
import axios from 'axios';

class BuildListPage extends Component {
  getBuilds = () => {
    if(this.props.branch && this.props.project) {
      console.log("branch")
      this.props.getBranchBuilds(this.props.project, this.props.branch)
      this.props.fetched()
    }else {
      if(this.props.project) {
        console.log("project")
        this.props.getProjectBuilds(this.props.project)
        this.props.fetched()
      }else {
        this.props.fetchBuilds()
        this.props.fetched()
      }
    }
  }

  componentDidMount() {
    this.props.fetchBuilds()
  }

  render() {
    return (
      <div>

        {
          this.props.projectOrBranchSelected ? this.getBuilds() : ""
        }
        <HeaderComponent
          subheader="Latest Builds"
        />
        <div className="dropDownHolder">
          <Dropdown name="projects"/>
          <Dropdown name="branches"/>
        </div>
        <ListComponent
          builds={this.props.builds}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    builds: state.buildList.builds,
    project: state.dropDown.project,
    branch: state.dropDown.branch,
    projectOrBranchSelected: state.dropDown.projectOrBranchSelected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBuilds: fetchBuilds,
    getProjectBuilds: getProjectBuilds,
    getBranchBuilds: getBranchBuilds,
    fetched: fetched
  }, dispatch)
}

BuildListPage = connect(mapStateToProps, mapDispatchToProps)(BuildListPage)

export default BuildListPage;
