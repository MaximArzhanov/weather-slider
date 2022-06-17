import REGISTER_USER from '../actions/registerUserAction';

const registerUserActionCreator = (user) => ({ type: REGISTER_USER, user: user });

export default registerUserActionCreator;