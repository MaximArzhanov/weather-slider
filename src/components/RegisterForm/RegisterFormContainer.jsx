import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
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
    },
    validationField: (e) => {
      if (e.target.validity.valid) {

      }
    }
  }
}

const RegisterFormContainer = ({ ...props }) => {

  React.useEffect(() => {

    // При размонтировании компонента происходит сброс полей
    return () => {
      props.clearField();
    }
  }, []);

  return (
    <RegisterForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
