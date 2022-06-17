import CHANGE_PASSWORD_INPUT from '../actions/changePasswordInputAction';

const changePasswordInputActionCreator = (password) => ({ type: CHANGE_PASSWORD_INPUT, password: password });

export default changePasswordInputActionCreator;