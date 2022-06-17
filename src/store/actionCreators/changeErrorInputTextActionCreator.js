import CHANGE_ERROR_INPUT_TEXT from '../actions/changeErrorInputTextAction';

const changeErrorInputTextActionCreator = (inputID, errorText) => ({
  type: CHANGE_ERROR_INPUT_TEXT, inputID: inputID, errorText: errorText
});

export default changeErrorInputTextActionCreator;
