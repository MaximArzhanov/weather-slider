import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import changeTextInputActionCreator from '../../store/actionCreators/changeTextInputActionCreator';
import clearTextInputsActionCreator from '../../store/actionCreators/clearTextInputsActionCreator';
import changeErrorInputTextActionCreator from '../../store/actionCreators/changeErrorInputTextActionCreator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import validationField from '../../utils/validationField';

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT],
    errorValidationTextEmail: state.auth.inputValidationErrors[EMAIL_INPUT],
    errorValidationTextPassword: state.auth.inputValidationErrors[PASSWORD_INPUT],
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
