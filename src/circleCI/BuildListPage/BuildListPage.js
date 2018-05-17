import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ListComponent from '../ListComponent/ListComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBuilds } from '../reducers/BuildListReducer/actions.js';
import './BuildListPage.css';
import axios from 'axios';

class BuildListPage extends Component {
  componentDidMount() {
    this.props.fetchBuilds()
  }

  render() {
    console.log("render")
    return (
      <div>
        <HeaderComponent
          subheader="Latest Builds"
        />
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
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBuilds: fetchBuilds,
  }, dispatch)
}

BuildListPage = connect(mapStateToProps, mapDispatchToProps)(BuildListPage)

export default BuildListPage;
