import * as TYPES from './constants';

const initialState = {
  build: []
};

function buildDetailsReducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.SET_BUILD: {
      return Object.assign({...state}, {
        build: action.build
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default buildDetailsReducer;
