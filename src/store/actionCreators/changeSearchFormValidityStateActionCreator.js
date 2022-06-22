import CHANGE_SEARCH_FORM_VALIDITY_STATE from '../actions/changeSearchFormValidityStateAction';

const changeSearchFormValidityStateActionCreator = (state) => ({
  type: CHANGE_SEARCH_FORM_VALIDITY_STATE,
  state: state
});

export default changeSearchFormValidityStateActionCreator;
