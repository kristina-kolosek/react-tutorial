import React, {Component} from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ListComponent from '../ListComponent/ListComponent';
import './BuildListPage.css';
import axios from 'axios';

class BuildListPage extends Component {
  constructor() {
    console.log("cons")
    super();
    this.state = {
      fetched: false,
      builds: [
        {
          status: "",
          message: "",
          branch: "",
          stopTime: "",
        }
      ],

    }
  }
  updateBuilds = (builds) => {
    this.setState((prevState) => {
      console.log("dd")
      let newState = prevState;
      newState["builds"] = builds;
      newState["fetched"] = true;
      return (
        newState
      )
    })
  }
  getBuilds = (updateBuilds) => {
    if(this.state.fetched) {
      return;
    }
    axios.get('https://circleci.com/api/v1.1/project/github/secondrotation/channel_advisor?circle-token=def3839ecb44fa30feba6620930443b95d647222&limit=20&offset=5&filter=completed')
      .then(function (response) {
        let builds = [];
        response.data.forEach((build) => {
          let tempBuild = {
            status: build["status"],
            message: build["all_commit_details"][0]["subject"],
            branch: build["branch"],
            stopTime: build["stop_time"],
            buildNum: build["build_num"]
          }
          builds.push(tempBuild);
        })
        updateBuilds(builds)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    console.log("render")
    return (
      <div>
        <HeaderComponent
          subheader="Latest Builds"
        />
        <ListComponent
          builds={this.state.builds}
        />
        {
          this.getBuilds(this.updateBuilds)
        }
      </div>
    );
  }
}

export default BuildListPage;
