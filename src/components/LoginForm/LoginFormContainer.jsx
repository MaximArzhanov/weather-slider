import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import changeTextInputActionCreator from '../../store/actionCreators/changeTextInputActionCreator';
import clearTextInputsActionCreator from '../../store/actionCreators/clearTextInputsActionCreator';
import clearErrorInputsActionCreator from '../../store/actionCreators/clearErrorInputsActionCreator';
import changeErrorInputTextActionCreator from '../../store/actionCreators/changeErrorInputTextActionCreator';
import changeFormValidityStateActionCreator from '../../store/actionCreators/changeFormValidityStateActionCreator';
import loginUserThunkCreator from '../../store/thunkMiddlwares/loginUserThunkCreator';
import clearAuthErrorTextActionCreator from '../../store/actionCreators/clearAuthErrorTextActionCrator';
import { EMAIL_INPUT, PASSWORD_INPUT } from '../../utils/constants';
import { validationInput, validationForm } from '../../utils/validation';
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {

  console.log(state);
  return {
    emailValue: state.auth.inputTexts[EMAIL_INPUT],
    passwordValue: state.auth.inputTexts[PASSWORD_INPUT],
    errorValidationTextEmail: state.auth.inputValidationErrors[EMAIL_INPUT],
    errorValidationTextPassword: state.auth.inputValidationErrors[PASSWORD_INPUT],
    isFormValid: state.auth.isFormValid,
    authResult: state.auth.authResult,
    userloginStatus: state.userloginStatus.isUserLogined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextInput: (e) => { // При изменении текста происходит изменения стейт-переменных
      validationInput(e, dispatch, changeErrorInputTextActionCreator); // Валидация поля
      validationForm(e, dispatch, changeFormValidityStateActionCreator); // Валидация формы
      const inputID = e.target.id;
      const text = e.target.value;
      const action = changeTextInputActionCreator(inputID, text);
      dispatch(action);
    },
    clearField: () => { // Очистка полей ввода
      const action = clearTextInputsActionCreator();
      dispatch(action);
    },
    clearErrors: () => { // Очистка полей с текстом ошибок валидации
      const action = clearErrorInputsActionCreator();
      dispatch(action);
    },
    submitLoginForm: (e, email, password) => { // Отправка формы авторизации
      e.preventDefault();
      dispatch(loginUserThunkCreator(email, password));
    },
    clearAuthErrorText: () => { // Очистка текста ошибки при авторизации
      dispatch(clearAuthErrorTextActionCreator())
    }
  }
}

const LoginFormContainer = ({ ...props }) => {

  let navigate = useNavigate();
  React.useEffect(() => {
    return () => {
      props.clearField();
      props.clearErrors();
      props.clearAuthErrorText();
    }
  }, []);

  React.useEffect(() => {
    if (props.userloginStatus) { navigate('/') }; // Если вход в систему выполнен, то редирект на главную страницу
  }, [props.userloginStatus]);

  return (
    <LoginForm {...props} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
