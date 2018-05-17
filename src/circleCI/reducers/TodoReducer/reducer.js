import * as TYPES from './constants';

const initialState = {
  todoList: [],
  appName: "To Do App",
  showSuccess: false,
};

function todoReducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.TOGGLE_SHOW_SUCCESS: {
      return Object.assign({...state}, {
        showSuccess: action.newPropValue
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default todoReducer;
