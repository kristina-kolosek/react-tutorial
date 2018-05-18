import * as TYPES from './constants';
import axios from 'axios';

export function getBranchBuilds(project, branch) {
  return dispatch => {
    //https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/tree/:branch
    axios.get(`https://circleci.com/api/v1.1/project/github/${project["username"]}/${project["reponame"]}/tree/${branch}`)
         .then((response) => {
           dispatch({
             type: TYPES.GET_BRANCH_BUILDS,
             builds: response.data
           })
         })
  }
}

export function getProjectBuilds(project) {
  console.log("project")
  return dispatch => {
    //https://circleci.com/api/v1.1/project/:vcs-type/:username/:project?circle-token=:token&limit=20&offset=5&filter=completed
    axios.get(`https://circleci.com/api/v1.1/project/github/${project["username"]}/${project["reponame"]}`, {
      params: {
        'circle-token': '26cadeb471da9fba8177d46e4ded13f226638e9f',
        'limit': 50,
        'offset': 0,
        'filter': 'completed'
      }
    })
         .then((response) => {
           dispatch({
             type: TYPES.GET_PROJECT_BUILDS,
             builds: response.data
           })
         })
  }
}

export function fetchBuilds() {
 return dispatch => {
   //https://circleci.com/api/v1.1/recent-builds?circle-token=26cadeb471da9fba8177d46e4ded13f226638e9f&limit=20&offset=5
   //dispatch(setLoadingBookState()); // Show a loading spinner
   axios.get('https://circleci.com/api/v1.1/recent-builds', {
     params: {
       'circle-token': '26cadeb471da9fba8177d46e4ded13f226638e9f',
       'limit': 50,
       'offset': 0
     }
   }).then((response) => {
     //dispatch(doneFetchingBuilds()); // Hide loading spinner
     if(response.status == 200){
       let builds = [];
       response.data.forEach((build) => {
         let tempBuild = {
           status: build["status"],
           message: build["all_commit_details"][0]["subject"],
           branch: build["branch"],
           stopTime: build["stop_time"],
           buildNum: build["build_num"],
           username: build["username"],
           project: build["reponame"],
           vcs: build["vcs_type"]
         }
         builds.push(tempBuild);
       })
       dispatch(setBuilds(builds)); // Use a normal function to set the received state
     }else {
     }
   })
 }
}

function setBuilds(data) {
 return { type: TYPES.SET_BUILDS, builds: data };
}
