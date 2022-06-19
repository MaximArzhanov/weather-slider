import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import changeTextInputActionCreator from '../../store/actionCreators/changeTextInputActionCreator';
import clearTextInputsActionCreator from '../../store/actionCreators/clearTextInputsActionCreator';
import clearErrorInputsActionCreator from '../../store/actionCreators/clearErrorInputsActionCreator';
import changeErrorInputTextActionCreator from '../../store/actionCreators/changeErrorInputTextActionCreator';
import changeFormValidityStateActionCreator from '../../store/actionCreators/changeFormValidityStateActionCreator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';

const mapStateToProps = (state) => {
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT],
    errorValidationTextEmail: state.auth.inputValidationErrors[EMAIL_INPUT],
    errorValidationTextPassword: state.auth.inputValidationErrors[PASSWORD_INPUT],
    isFormValid: state.auth.isFormValid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => {
      validationInput(e, dispatch, changeErrorInputTextActionCreator); // Валидация поля
      validationForm(e, dispatch, changeFormValidityStateActionCreator); // Валидация формы
      const inputID = e.target.id;
      const text = e.target.value;
      const action = changeTextInputActionCreator(inputID, text);
      dispatch(action);
    },
    clearInput: () => {
      const action = clearTextInputsActionCreator();
      dispatch(action);
    },
    clearErrors: () => {
      const action = clearErrorInputsActionCreator();
      dispatch(action);
    },
    submitRegisterForm: (e) => {
      e.preventDefault();
    }
  }
}

const RegisterFormContainer = ({ ...props }) => {

  React.useEffect(() => {

    // При размонтировании компонента происходит сброс полей
    return () => {
      props.clearInput();
      props.clearErrors();
    }
  }, []);

  return (
    <RegisterForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);