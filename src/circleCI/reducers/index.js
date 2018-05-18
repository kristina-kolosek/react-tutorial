import { combineReducers } from 'redux'

import todoReducer from './TodoReducer/reducer';
import buildListReducer from './BuildListReducer/reducer';
import buildDetails from './BuildDetailsReducer/reducer';
import buildItemReducer from './BuildItemReducer/reducer';
import dropDownReducer from './DropdownReducer/reducer';

export default combineReducers({
  todo: todoReducer,
  buildList: buildListReducer,
  buildDetails: buildDetails,
  buildItem: buildItemReducer,
  dropDown: dropDownReducer
});
