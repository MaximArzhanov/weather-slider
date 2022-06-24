import UPDATE_CURRENT_USER from '../actions/updateCurrentUserAction';

const updateCurrentUserActionCreator = (currentUser) => ({
  type: UPDATE_CURRENT_USER,
  currentUser: currentUser
});

export default updateCurrentUserActionCreator;
