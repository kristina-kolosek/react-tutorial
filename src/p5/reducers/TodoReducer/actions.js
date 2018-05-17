import * as TYPES from './constants';

export function toggleShowSuccess(newPropValue) {
  return (dispatch) => {
    dispatch({
      newPropValue,
      type: TYPES.TOGGLE_SHOW_SUCCESS,
    });
  }
};
