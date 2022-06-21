import CHANGE_SEARCH_TEXT from '../actions/changeSearchTextAction';

const changeSearchTextActionCreator = (inputID, text) => ({ type: CHANGE_SEARCH_TEXT, inputID: inputID, text: text });

export default changeSearchTextActionCreator;
