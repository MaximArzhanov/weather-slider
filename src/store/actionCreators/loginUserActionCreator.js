import LOGIN_USER from '../actions/loginUserAction';

const loginUserActionCreator = (user) => ({ type: LOGIN_USER, user: user });

export default loginUserActionCreator;