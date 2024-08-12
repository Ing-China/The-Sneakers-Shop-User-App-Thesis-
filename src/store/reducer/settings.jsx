import {actionTypes} from '../../constants';

const initialState = {
  code: 'en',
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOGGLE_CHANGE_LANGUAGE:
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
