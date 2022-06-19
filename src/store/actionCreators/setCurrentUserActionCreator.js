import SET_CURRENT_USER from '../actions/setCurrentUserAction';

const setCurrentUserActionCreator = (user) => ({
  type: SET_CURRENT_USER,
  user: { ...user }
});

export default setCurrentUserActionCreator;
