import * as TYPES from './constants';
import axios from 'axios';

export function fetchProjects() {
 return dispatch => {
   axios.get(`https://circleci.com/api/v1.1/projects`, {
     params: {
       'circle-token': '26cadeb471da9fba8177d46e4ded13f226638e9f',
     }
   }).then((response) => {
     dispatch({
       type: TYPES.FETCH_PROJECTS,
       projects: response.data
     })
   })
 }
}

export function fetched() {
  return dispatch => {
    dispatch({
      type: TYPES.FETCHED,
    })
  }
}

export function fetchBranches(project) {
  console.log(project["branches"])
 return dispatch => {
   dispatch({
     type: TYPES.FETCH_BRANCHES,
     branches: project["branches"]
   })
 }
}

export function selectedProject(project) {
  return dispatch => {
    dispatch({
      type: TYPES.SELECTED_PROJECT,
      project: project
    })
  }
}

export function selectedBranch(branch) {
  console.log("aa")
  return dispatch => {
    dispatch({
      type: TYPES.SELECTED_BRANCH,
      branch: branch
    })
  }
}
