import CHANGE_EMAIL_INPUT from '../actions/changeEmailInputAction';

const changeEmailInputActionCreator = (email) => ({ type: CHANGE_EMAIL_INPUT, email: email });

export default changeEmailInputActionCreator;