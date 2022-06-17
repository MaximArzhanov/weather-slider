import CHANGE_TEXT_INPUT from '../actions/changeTextInputAction';

const changeTextInputActionCreator = (inputID, text) => ({ type: CHANGE_TEXT_INPUT, inputID: inputID, text: text });

export default changeTextInputActionCreator;
