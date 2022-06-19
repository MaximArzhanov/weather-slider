import LOGIN_USER from '../actions/loginUserAction';

const loginUserActionCreator = (result) => ({
  type: LOGIN_USER,
  result: { ...result }
});

export default loginUserActionCreator;
