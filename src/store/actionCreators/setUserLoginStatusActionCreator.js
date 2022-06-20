import SET_USET_LOGIN_STATUS from '../actions/setUserLoginStatusAction';

const setUserLoginStatusActionCreator = (userLoginStatus) => ({
  type: SET_USET_LOGIN_STATUS,
  userLoginStatus: userLoginStatus
});

export default setUserLoginStatusActionCreator;
