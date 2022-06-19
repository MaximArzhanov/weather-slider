import CHANGE_FORM_VALIDITY_STATE from '../actions/changeFormVilidityStateAction';

const changeFormValidityStateActionCreator = (state) => ({ type: CHANGE_FORM_VALIDITY_STATE, state: state });

export default changeFormValidityStateActionCreator;
