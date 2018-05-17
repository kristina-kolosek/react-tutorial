import { combineReducers } from 'redux'

import todoReducer from './TodoReducer/reducer';

export default combineReducers({
  todo: todoReducer,
});
