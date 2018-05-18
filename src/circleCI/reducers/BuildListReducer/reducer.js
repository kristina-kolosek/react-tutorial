import * as TYPES from './constants';

const initialState = {
  builds: []
};

function buildListReducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.SET_BUILDS: {
      return Object.assign({...state}, {
        builds: action.builds
      });
    }
    case TYPES.GET_BRANCH_BUILDS: {
      return Object.assign({...state}, {
        builds: action.builds
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default buildListReducer;
