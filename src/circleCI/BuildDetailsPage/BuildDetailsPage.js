import React, {Component} from 'react';
import './BuildDetailsPage.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import axios from 'axios';

class BuildDetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      fetched: false,
      build: {
        status: "",
        message: "",
        branch: "",
        stopTime: "",
      },

    }
  }
  getSubheader = () => {
    return "Build no #" + this.props.match.params.num;
  }

  updateBuild = (build) => {
    this.setState((prevState) => {
      return {
        build: build,
        fetched: true
      }
    })
  }
  getBuild = (updateBuild) => {
    if(this.state.fetched) {
      return;
    }
    let link = `https://circleci.com/api/v1.1/project/github/secondrotation/channel_advisor/${this.props.match.params.num}?circle-token=def3839ecb44fa30feba6620930443b95d647222&limit=20&offset=5&filter=completed`
    console.log(link)
    axios.get(link)
      .then(function (response) {
          let build = response.data;
          let tempBuild = {
            status: build["status"],
            message: build["all_commit_details"][0]["subject"],
            branch: build["branch"],
            stopTime: build["stop_time"],
            buildNum: build["build_num"]
          }
          updateBuild(tempBuild)

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <HeaderComponent subheader={this.getSubheader()} />
        {
          this.getBuild(this.updateBuild)
        }
        <div className="detailItem">
          Branch name: {this.state.build.branch}
        </div>
        <div className="detailItem">
          Status: {this.state.build.status}
        </div>
        <div className="detailItem">
          Commit Message: {this.state.build.message}
        </div>
      </div>
    );
  }
}

export default BuildDetailsPage;
