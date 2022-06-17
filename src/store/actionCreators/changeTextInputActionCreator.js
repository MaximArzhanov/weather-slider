import CHANGE_TEXT_INPUT from '../actions/changeTextInputAction';

const changeTextInputActionCreator = (fieldID, text) => ({ type: CHANGE_TEXT_INPUT, fieldID: fieldID, text: text });

export default changeTextInputActionCreator;
