import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import changeTextInputActionCreator from '../../store/actionCreators/changeTextInputActionCreator';
import clearTextInputsActionCreator from '../../store/actionCreators/clearTextInputsActionCreator';
import changeErrorInputTextActionCreator from '../../store/actionCreators/changeErrorInputTextActionCreator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import validationField from '../../utils/validationField';

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => {
      validationField(e, dispatch, changeErrorInputTextActionCreator); // Валидация поля
      const inputID = e.target.id;
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
