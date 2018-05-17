import { combineReducers } from 'redux'

import todoReducer from './TodoReducer/reducer';
import buildListReducer from './BuildListReducer/reducer';
import buildDetails from './BuildDetailsReducer/reducer';

export default combineReducers({
  todo: todoReducer,
  buildList: buildListReducer,
  buildDetails: buildDetails
});
