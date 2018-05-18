import * as TYPES from './constants';

const initialState = {
  restarted: false,
  restarting: false,
  buildNum: -1
};

function buildItemReducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.RESET_BUILD: {
      console.log(action)
      return Object.assign({...state}, {
        restarted: action.restarted,
        restarting: action.restarting,
        buildNum: action.buildNum
      });
    }
    case TYPES.CANCEL_BUILD: {
      console.log(action)
      return Object.assign({...state}, {
        restarted: action.restarted,
        restarting: action.restarting,
        buildNum: action.buildNum
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default buildItemReducer;
