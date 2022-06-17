import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import changeTextInputActionCreator from '../../store/actionCreators/changeTextInputActionCreator';
import clearTextInputsActionCreator from '../../store/actionCreators/clearTextInputsActionCreator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => {
      const inputID = e.target. id;
      const text = e.target.value;
      const action = changeTextInputActionCreator(inputID, text);
      dispatch(action);
    },
    clearField: () => {
      const action = clearTextInputsActionCreator();
      dispatch(action);
    }
  }
}

const LoginFormContainer = ({ ...props }) => {

  // При размонтировании компонента происходит сброс полей
  React.useEffect(() => {
    return () => {
      props.clearField();
    }
  }, []);

  return (
    <LoginForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
