import {actionTypes} from '../../constants';
const setLanguageSuccess = value => {
  return {
    type: actionTypes.SET_TOGGLE_CHANGE_LANGUAGE,
    payload: value,
  };
};

export const setToggleLanguage = code => {
  return dispatch => {
    // console.log('SET_TOGGLE_LANGUAGE_WITH_CODE:', code);
    dispatch(setLanguageSuccess(code));
  };
};
