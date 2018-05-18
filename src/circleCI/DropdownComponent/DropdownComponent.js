import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjects, fetchBranches, selectedProject, selectedBranch } from '../reducers/DropdownReducer/actions.js';
import './DropdownComponent.css';

class Dropdown extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  renderOptions = () => {
    return this.props.projects.map((item, index) => {
        return (<option key={item.reponame} value={item.reponame}>{item.reponame}</option>)
    })
  }

  renderBranchOptions = () => {
    for (var property in this.props.branches) {
      if (this.props.branches.hasOwnProperty(property)) {
        return( <option key={property} value={property}>{property}</option> )
      }
    }
  }

  getBranches = (event) => {
    this.props.projects.forEach((project) => {
      if(project.reponame == event.target.value) {
        this.props.fetchBranches(project);
        this.props.selectedProject(project)
      }
    })
  }

  triggerBuilds = (event) => {
    this.props.selectedBranch(event.target.value);
  }
  renderDropDown = () => {
    if(this.props.name == "projects") {
      return(
        <select
          onChange={this.getBranches}
          className="custom-select"
        >
          <option value="">Select Project</option>
          {this.renderOptions()}
        </select>
      )
    }else {
      return(
        <select
          onChange={this.triggerBuilds}
          className="custom-select"
        >
          <option value="">Select branch</option>
          {this.renderBranchOptions()}
        </select>
      )
    }
  }

  render() {
    return (
      <div>
        {
          this.renderDropDown()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.dropDown.projects,
    branches: state.dropDown.branches,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProjects: fetchProjects,
    fetchBranches: fetchBranches,
    selectedProject: selectedProject,
    selectedBranch: selectedBranch
  }, dispatch)
}

Dropdown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

export default Dropdown;
