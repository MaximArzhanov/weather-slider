import CHANGE_SEARCH_ERROR_INPUT_TEXT from '../actions/changeSearchErrorInputTextAction';

const changeSearchErrorInputTextActionCreator = (inputID, errorText) => ({
  type: CHANGE_SEARCH_ERROR_INPUT_TEXT,
  inputID: inputID,
  errorText: errorText
});

export default changeSearchErrorInputTextActionCreator;
