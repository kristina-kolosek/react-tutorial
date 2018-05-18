import * as TYPES from './constants';

const initialState = {
  projects: [],
  branches: [],
  project: {},
  branch: "",
  projectOrBranchSelected: false
};

function dropDownReducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.FETCH_PROJECTS: {
      console.log(action)
      return Object.assign({...state}, {
        projects: action.projects
      });
    }
    case TYPES.SELECTED_PROJECT: {
      console.log(action)
      let change = false;
      if(action.project) {
        change = true;
      }
      return Object.assign({...state}, {
        project: action.project,
        projectOrBranchSelected: change
      });
    }
    case TYPES.FETCH_BRANCHES: {
      console.log(action)
      return Object.assign({...state}, {
        branches: action.branches
      });
    }
    case TYPES.SELECTED_BRANCH: {
      console.log(action)
      let changed = false;
      if(action.branch) {
        changed = true;
      }
      return Object.assign({...state}, {
        branch: action.branch,
        projectOrBranchSelected: changed
      });
    }
    case TYPES.FETCHED: {
      return Object.assign({...state}, {
        projectOrBranchSelected: false
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default dropDownReducer;
