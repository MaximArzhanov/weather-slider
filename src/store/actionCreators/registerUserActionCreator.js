import REGISTER_USER from '../actions/registerUserAction';

const registerUserActionCreator = (result) => ({
  type: REGISTER_USER,
  result: { ...result }
});

export default registerUserActionCreator;
